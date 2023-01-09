import EditIcon from '@mui/icons-material/Edit'

import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { Bookmark, BookmarkTag } from '../API'
import { updateBookmarkRequest } from '../APIWrapper'
import { BookmarkDate } from './BookmarkDate'
import { BookmarkTags } from './BookmarkTags'
import { DeleteButton as DeleteBookmarkButton } from './DeleteButton'
import { ErrorBanner } from './ErrorBanner'
import Link from './Link'

export interface BookmarkListItemProps {
  bookmark: Bookmark
  editable: boolean
  onDeleted: (url: string) => void
  onUpdated: (b: Bookmark) => void
}

export const BookmarkListItem = ({ bookmark, editable, onDeleted, onUpdated }: BookmarkListItemProps) => {
  const [errorMessage, setErrorMessage] = useState<string>()
  const [editedComment, setEditedComment] = useState(bookmark.comment)
  const { url, title, updatedAt, createdAt, comment, iconUrl } = bookmark
  const [editing, setEditing] = useState<boolean>(false)
  const tags = (bookmark.tags?.items || []) as BookmarkTag[]

  const updateBookmarkComment = async () => {
    try {
      const { url, title, iconUrl, dead } = bookmark
      const updatedBookmark = await updateBookmarkRequest({
        url,
        title,
        iconUrl,
        dead,
        comment: editedComment,
      })
      setEditing(false)
      setErrorMessage('')
      onUpdated(updatedBookmark)
    } catch (e) {
      console.log(JSON.stringify(e))
      if (e instanceof Error) {
        setErrorMessage(e.message)
      } else {
        setErrorMessage('unexpected error')
      }
    }
  }
  const onTagsUpdated = (updatedTags: BookmarkTag[]) => {
    onUpdated({
      ...bookmark,
      tags: {
        __typename: 'ModelBookmarkTagConnection',
        items: updatedTags,
      },
    })
  }

  const ActionItems = () => (
    <Stack direction="row" spacing={0}>
      <IconButton size="small" onClick={() => setEditing(!editing)}>
        <EditIcon fontSize="inherit" />
      </IconButton>
      <DeleteBookmarkButton url={url} onError={(mes) => setErrorMessage(mes)} onDeleted={onDeleted} />
    </Stack>
  )
  return (
    <Card>
      <CardContent>
        <Stack spacing={2} typography="body1">
          <Stack>
            <Stack direction="row" alignItems="center" gap={1}>
              <Avatar sx={{ width: 16, height: 16 }} src={iconUrl || undefined} />
              <Typography variant="subtitle1">
                <Link href={url} target="_blank">
                  {title.length > 0 ? title : new URL(url).hostname}
                </Link>
              </Typography>
              {editable && <ActionItems />}
            </Stack>
            <Typography variant="caption">
              <Link href={url} target="_blank">
                {url.toString()}
              </Link>
            </Typography>
            {errorMessage && <ErrorBanner errorMessage={errorMessage} />}
          </Stack>
          {editing && (
            <>
              <TextField
                multiline
                rows={4}
                value={editedComment}
                fullWidth
                type="text"
                variant="outlined"
                margin="dense"
                label="Comment"
                id="comment"
                onChange={(e) => setEditedComment(e.target.value)}
              />
              <Button variant="contained" onClick={updateBookmarkComment} disabled={false}>
                Update Comment
              </Button>
            </>
          )}
          {!editing && comment.length > 0 ? <Typography>{comment}</Typography> : <></>}
          {(tags.length > 0 || editable) && (
            <BookmarkTags tags={tags} url={url} editable={editable} onTagsUpdated={onTagsUpdated} />
          )}
          <BookmarkDate updatedAt={updatedAt} createdAt={createdAt} />
        </Stack>
      </CardContent>
    </Card>
  )
}

export const BookmarkListSkeltonItem = () => (
  <Card>
    <CardHeader
      avatar={<Skeleton variant="circular" width={40} height={40} />}
      title={<Skeleton width="40%" />}
      subheader={<Skeleton width="60%" />}
    />
    <CardContent>
      <Stack spacing={2}>
        <Typography>
          <Skeleton width="80%" />
        </Typography>
        <Typography variant="caption" width="50%">
          <Skeleton />
        </Typography>
        <Skeleton width="40%" />
      </Stack>
    </CardContent>
  </Card>
)
