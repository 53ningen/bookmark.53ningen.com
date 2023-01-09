import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton } from '@mui/material'
import { deleteBookmarkRequest } from '../APIWrapper'

interface DeleteButtonProps {
  url: string
  onError?: (errorMessage: string) => void
  onDeleted?: (url: string) => void
}

export const DeleteButton = ({ url, onError, onDeleted }: DeleteButtonProps) => {
  const deleteBookmark = async () => {
    try {
      await deleteBookmarkRequest({ url })
      onDeleted?.(url)
    } catch (e) {
      if (e instanceof Error) {
        onError?.(e.message)
      } else {
        onError?.('unexpected error')
      }
    }
  }
  return (
    <IconButton aria-label="delete" size="small" onClick={deleteBookmark}>
      <DeleteIcon fontSize="inherit" />
    </IconButton>
  )
}
