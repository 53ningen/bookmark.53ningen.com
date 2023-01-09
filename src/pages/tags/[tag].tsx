import { Stack, Typography } from '@mui/material'
import { API, graphqlOperation } from 'aws-amplify'
import { GetStaticPropsResult } from 'next'
import Head from 'next/head'
import { Bookmark, BookmarkTag, ListBookmarkTagsQueryVariables, Tag } from '../../API'
import { BookmarkList } from '../../components/BookmarkList'
import { listBookmarkTags, listTags } from '../../graphql/queries'

interface TagPageProps {
  tag: String
  initBookmarks?: Bookmark[]
  initErrorMessage?: string
  initNextToken?: string
  generatedAt: string
}

export default function TagPage({ tag, initBookmarks, initErrorMessage, initNextToken, generatedAt }: TagPageProps) {
  return (
    <Stack spacing={2}>
      <Head>
        <title>@gomi_ningen bookmarks for {tag}</title>
      </Head>
      <Typography variant="h3">Bookmarks for {tag}:</Typography>
      <BookmarkList initBookmarks={initBookmarks} initNextToken={initNextToken} initErrorMessage={initErrorMessage} />
      <Typography variant="caption" textAlign="right">
        Generated at {generatedAt}
      </Typography>
    </Stack>
  )
}

export async function getStaticPaths() {
  const res = await API.graphql(graphqlOperation(listTags))
  if ('data' in res && res.data.listTags) {
    const items = res.data.listTags.items as Tag[]
    const paths = items.map((i) => {
      return { params: { tag: i.id } }
    })
    return { paths, fallback: 'blocking' }
  }
  throw Error('unexpected error')
}

export async function getStaticProps(context: any): Promise<GetStaticPropsResult<TagPageProps>> {
  const revalidate = 60
  const { tag } = context.params as {
    tag: string
  }
  var props: any = {
    generatedAt: new Date().toISOString(),
    tag,
  }
  const params = { filter: { tagID: { eq: tag } } } as ListBookmarkTagsQueryVariables
  const res = await API.graphql(graphqlOperation(listBookmarkTags, params))
  if ('data' in res && res.data.listBookmarkTags) {
    const items = res.data.listBookmarkTags.items as BookmarkTag[]
    props.initBookmarks = items.map((i) => i.bookmark)
    return {
      props,
      revalidate,
    }
  }
  return {
    props,
    revalidate,
  }
}
