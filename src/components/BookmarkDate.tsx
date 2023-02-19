import CreateIcon from '@mui/icons-material/Create'
import RefreshIcon from '@mui/icons-material/Refresh'

import { Chip, Stack } from '@mui/material'
import { Constants } from '../constants'

interface BookmarkDateProps {
  createdAt: string
  updatedAt: string
}

export const BookmarkDate = ({ createdAt, updatedAt }: BookmarkDateProps) => {
  const createdDate = new Date(createdAt).toLocaleString(Constants.locale)
  const updatedDate = new Date(updatedAt).toLocaleString(Constants.locale)
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        sx={{ fontSize: 12 }}
        size="small"
        variant="outlined"
        icon={<CreateIcon fontSize="inherit" />}
        label={<span suppressHydrationWarning>{createdDate}</span>}
      />
      <Chip
        sx={{ fontSize: 12 }}
        size="small"
        variant="outlined"
        icon={<RefreshIcon fontSize="inherit" />}
        label={<span suppressHydrationWarning>{updatedDate}</span>}
      />
    </Stack>
  )
}
