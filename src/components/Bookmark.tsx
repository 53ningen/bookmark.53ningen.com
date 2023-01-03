import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Avatar, Card, CardContent, CardHeader, IconButton, Stack, Typography } from '@mui/material'
import { Bookmark as BookmarkData, Tag } from '../API'
import Link from './Link'
import { Tags } from './Tags'

export interface BookmarkProps {
  bookmark: BookmarkData
  editable?: boolean
}

export const Bookmark = ({ bookmark, editable }: BookmarkProps) => {
  const { url, title, updatedAt, createdAt, comment, iconUrl, tags } = bookmark
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
            updated: {updatedAt}, created: {createdAt}
          </Typography>
          <Tags
            tags={tags?.items?.map((i) => {
              return { id: i?.tagID } as Tag
            })}
          />
        </Stack>
      </CardContent>
    </Card>
  )
}

export interface BookmarkListProps {
  bookmarks: BookmarkData[]
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
