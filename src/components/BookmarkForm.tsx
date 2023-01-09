import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Input,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { Bookmark, CreateBookmarkInput } from '../API'
import { addBookmarkRequest } from '../APIWrapper'
import { ErrorBanner } from '../components/ErrorBanner'
import { useDebounce } from '../hooks/useDebounce'

interface BookmarkFormProps {
  onAdded: (bookmark: Bookmark) => void
}

const initialInput = {
  url: '',
  title: '',
  iconUrl: undefined,
  comment: '',
  dead: false,
  type: 'Bookmark',
} as CreateBookmarkInput

export const BookmarkForm = ({ onAdded }: BookmarkFormProps) => {
  const [isBusy, setIsBusy] = useState(false)
  const [newBookmark, setNewBookmark] = useState<CreateBookmarkInput>(initialInput)
  const [errorMessage, setErrorMessage] = useState<string>()
  const debouncedUrl = useDebounce(newBookmark.url, 400)
  const isValidUrl = (url: string) => {
    try {
      const { protocol } = new URL(url)
      return protocol === 'http:' || protocol === 'https:'
    } catch {
      return false
    }
  }
  const addBookmark = async () => {
    setIsBusy(true)
    try {
      const b = await addBookmarkRequest(newBookmark)
      onAdded(b)
      setNewBookmark(initialInput)
      setErrorMessage(undefined)
      setIsBusy(false)
    } catch (e) {
      if (e instanceof Error) {
        setErrorMessage(e.message)
      } else {
        setErrorMessage('unexpected error')
      }
      setIsBusy(false)
    }
  }
  useEffect(() => {
    ;(async () => {
      if (!isValidUrl(debouncedUrl)) {
        return
      }
      try {
        const res = await fetch(`/api/hello?url=${debouncedUrl}`)
        const json = (await res.json()) as { title?: string; iconUrl?: string; error?: string }
        if (json.error) {
          throw new Error(json.error)
        }
        setNewBookmark((n) => {
          return {
            ...n,
            title: json.title || new URL(debouncedUrl).hostname,
            iconUrl: json.iconUrl,
          }
        })
        setErrorMessage(undefined)
      } catch (e) {
        if (e instanceof Error) {
          setErrorMessage(e.message)
        } else {
          setErrorMessage('unexpected error')
        }
        setNewBookmark((n) => {
          return {
            ...n,
            title: new URL(debouncedUrl).hostname,
            iconUrl: undefined,
          }
        })
      }
    })()
  }, [debouncedUrl])
  return (
    <Card>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h4">📚 Add Bookmark</Typography>
          {isValidUrl(debouncedUrl) && newBookmark.url.length > 0 && (
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <FormControl variant="standard" sx={{ width: '80%' }}>
                <Input
                  id="title"
                  fullWidth
                  value={newBookmark.title}
                  disabled
                  type="text"
                  startAdornment={
                    <InputAdornment position="start">
                      <Avatar src={newBookmark.iconUrl || undefined} sx={{ width: 16, height: 16 }} />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          )}
          <TextField
            error={newBookmark.url.length > 0 && !isValidUrl(newBookmark.url)}
            value={newBookmark.url}
            fullWidth
            type="url"
            variant="outlined"
            margin="dense"
            label="URL"
            id="url"
            onChange={(e) => setNewBookmark({ ...newBookmark, url: e.target.value })}
          />
          <TextField
            multiline
            rows={4}
            value={newBookmark.comment}
            fullWidth
            type="text"
            variant="outlined"
            margin="dense"
            label="Comment"
            id="comment"
            onChange={(e) => setNewBookmark({ ...newBookmark, comment: e.target.value })}
          />
          <ErrorBanner errorMessage={errorMessage} />
          <Button variant="contained" onClick={addBookmark} disabled={isBusy || !isValidUrl(newBookmark.url)}>
            Add
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
