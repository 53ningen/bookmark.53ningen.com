import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Avatar, Card, CardContent, CardHeader, IconButton, Stack, Typography } from '@mui/material'
import Link from './Link'
import { Tags } from './Tags'

// TODO: REPLACE ME WITH GRAPHQL AUTO GEN INTERFACE
export interface BookmarkModel {
  url: URL
  title: string
  updated: Date
  created: Date
  comment: string
  iconUrl: URL | undefined
  tags: string[]
}

export interface BookmarkProps {
  bookmark: BookmarkModel
  editable: boolean | undefined
}

export const Bookmark = ({ bookmark, editable }: BookmarkProps) => {
  const { url, title, updated, created, comment, iconUrl, tags } = bookmark
  const actionItems = (
    <>
      <IconButton>
        <DeleteIcon />
      </IconButton>
      <IconButton>
        <EditIcon />
      </IconButton>
    </>
  )
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>R</Avatar>}
        title={title}
        subheader={
          <Link href={url} target="_blank">
            {url.toString()}
          </Link>
        }
        action={editable && actionItems}
      />
      <CardContent>
        <Stack spacing={2}>
          <Typography>{comment}</Typography>
          <Typography variant="caption">
            updated: {updated.toDateString()}, created: {created.toDateString()}
          </Typography>
          <Tags tags={tags} />
        </Stack>
      </CardContent>
    </Card>
  )
}

export interface BookmarkListProps {
  bookmarks: BookmarkModel[]
  editable: boolean
}

export const BookmarkList = ({ bookmarks, editable }: BookmarkListProps) => {
  return (
    <Stack spacing={2}>
      {bookmarks.map((b) => (
        <Bookmark key={b.url.toString()} bookmark={b} editable={editable} />
      ))}
    </Stack>
  )
}
