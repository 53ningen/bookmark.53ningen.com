import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { Box, Chip, FormControl, Input, InputAdornment, Stack } from '@mui/material'
import { FormEvent, useState } from 'react'
import { BookmarkTag } from '../API'
import {
  addBookmarkTagRequest,
  addTagRequest,
  deleteBookmarkTagRequest,
  getBookmarkRequest,
  getTagRequest,
} from '../APIWrapper'
import { ErrorBanner } from './ErrorBanner'
import Link from './Link'

interface BookmarkTagsProps {
  url: string
  tags: BookmarkTag[]
  editable: boolean
  onTagsUpdated: (updated: BookmarkTag[]) => void
}

export const BookmarkTags = ({ tags, editable, url, onTagsUpdated }: BookmarkTagsProps) => {
  const [isBusy, setIsBusy] = useState(false)
  const [newTag, setNewTag] = useState('')
  const [errorMessage, setErrorMessage] = useState<string>()
  const deleteTag = async (bookmarkTag: BookmarkTag) => {
    if (isBusy) {
      return
    }
    setIsBusy(true)
    try {
      await deleteBookmarkTagRequest({ id: bookmarkTag.id })
      onTagsUpdated(tags.filter((t) => t.tagID !== bookmarkTag.tagID))
    } catch (e) {
      console.log(JSON.stringify(e))
      if (e instanceof Error) {
        setErrorMessage(e.message)
      } else {
        setErrorMessage('unexpected error')
      }
    }
    setIsBusy(false)
  }
  const addBookmarkTag = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isBusy) {
      return
    }
    setIsBusy(true)
    try {
      const b = await getBookmarkRequest({ url })
      if (b.tags && b.tags.items.filter((t) => t && t.tagID === newTag).length > 0) {
        throw Error(`already taggged by ${newTag}`)
      }
      const t = await getTagRequest({ id: newTag })
      if (!t) {
        await addTagRequest({ id: newTag })
      }
      const added = await addBookmarkTagRequest({ bookmarkID: url, tagID: newTag })
      onTagsUpdated([...tags, added])
      setErrorMessage(undefined)
      setNewTag('')
    } catch (e) {
      console.log(JSON.stringify(e))
      if (e instanceof Error) {
        setErrorMessage(e.message)
      } else {
        setErrorMessage('unexpected error')
      }
    }
    setIsBusy(false)
  }
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1}>
        <Box>
          Tags:{' '}
          {tags?.map((tag, i) => (
            <Chip
              key={tag.id}
              label={<Link href={`/tags/${tag.tagID}`}>{tag.tagID}</Link>}
              size="small"
              sx={{ marginRight: i === tags.length - 1 ? 0 : 1, marginBottom: 1 }}
              onDelete={editable && url ? () => deleteTag(tag) : undefined}
              disabled={isBusy}
            />
          ))}
        </Box>
        {editable && (
          <form onSubmit={addBookmarkTag}>
            <FormControl variant="standard">
              <Input
                disabled={isBusy}
                size="small"
                value={newTag}
                type="text"
                startAdornment={
                  <InputAdornment position="start">
                    <AddCircleOutlineIcon fontSize="inherit" />
                  </InputAdornment>
                }
                onChange={(e) => setNewTag(e.target.value)}
              />
            </FormControl>
          </form>
        )}
      </Stack>
      {errorMessage && <ErrorBanner errorMessage={errorMessage} />}
    </Stack>
  )
}
