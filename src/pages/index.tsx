import { Stack, Typography } from '@mui/material'
import { API, graphqlOperation } from 'aws-amplify'
import { Bookmark } from '../API'
import { BookmarkList } from '../components/BookmarkList'
import { listBookmarks } from '../graphql/queries'

interface HomeProps {
  initBookmarks?: Bookmark[]
  initNextToken?: string
  initErrorMessage?: string
  generatedAt: string
}

export default function Home({ initBookmarks, initNextToken, initErrorMessage, generatedAt }: HomeProps) {
  return (
    <Stack spacing={2}>
      <BookmarkList initBookmarks={initBookmarks} initNextToken={initNextToken} />
      <Typography variant="caption" textAlign="right">
        Generated at {generatedAt}
      </Typography>
    </Stack>
  )
}

export async function getStaticProps() {
  const revalidate = 60
  var props: any = {
    generatedAt: new Date().toISOString(),
  }
  try {
    const res = await API.graphql(graphqlOperation(listBookmarks))
    if ('data' in res && res.data.listBookmarks) {
      props.initBookmarks = res.data.listBookmarks.items as Bookmark[]
      const initNextToken = res.data.listBookmarks.nextToken
      if (initNextToken) {
        props.initNextToken = initNextToken
      }
      return {
        props,
        revalidate,
      }
    } else if ('errors' in res && res.errors && res.errors.length > 0) {
      throw Error(res.errors[0].message)
    } else {
      throw Error('unexpected error')
    }
  } catch (e) {
    props.initErrorMessage = e instanceof Error ? e.message : 'unexpected error'
    return {
      props,
      revalidate,
    }
  }
}
