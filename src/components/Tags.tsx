import { Box, Chip, Paper, Skeleton, Typography } from '@mui/material'
import { API, graphqlOperation } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { Tag } from '../API'
import { listTags } from '../graphql/queries'
import { ErrorBanner } from './ErrorBanner'
import Link from './Link'

interface TagsProps {
  tags?: Tag[]
}

export const Tags = ({ tags }: TagsProps) => {
  return (
    <Box>
      {tags?.map((tag, i) => (
        <Link key={tag.id} href={`/tags/${tag.id}`}>
          <Chip label={tag.id} size="small" sx={{ marginRight: i === tags.length - 1 ? 0 : 1, marginBottom: 1 }} />
        </Link>
      ))}
    </Box>
  )
}

export const TagsWidget = () => {
  const [tags, setTags] = useState<Tag[]>()
  const [errorMessage, setErrorMessage] = useState<string>()
  useEffect(() => {
    ;(async () => {
      try {
        const res = await API.graphql(graphqlOperation(listTags))
        if ('data' in res && res.data.listTags) {
          const items = res.data.listTags.items as Tag[]
          setTags(items)
          return
        } else if ('errors' in res) {
          throw Error('invalid response')
        } else if ('data' in res && res.data.listTags === null) {
          return
        }
      } catch (e) {
        console.error(e)
        if (e instanceof Error) {
          setErrorMessage(e.message)
        }
      }
    })()
  }, [])
  return (
    <Paper sx={{ height: '100%' }}>
      <Box p={2}>
        <Typography variant="h4" pb={2}>
          Tags
        </Typography>
        {tags ? <Tags tags={tags} /> : skeleton}
        {/* FIXME: */}
        <ErrorBanner errorMessage={errorMessage} actionName="Retry" action={() => {}} />
      </Box>
    </Paper>
  )
}

const skeleton = (
  <Typography>
    <Skeleton animation="wave" />
    <Skeleton width="90%" animation="wave" />
    <Skeleton animation="wave" />
    <Skeleton width="90%" animation="wave" />
    <Skeleton animation="wave" />
  </Typography>
)
