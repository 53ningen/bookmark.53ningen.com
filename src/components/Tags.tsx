import { Box, Chip } from '@mui/material'
import Link from '../Link'

interface TagsProps {
  tags: string[]
}

export const Tags = ({ tags }: TagsProps) => {
  return (
    <Box>
      {tags.map((tag, i) => (
        <Link key={tag} href={`/tags/${tag}`}>
          <Chip label={tag} size="small" sx={{ marginRight: i === tags.length - 1 ? 0 : 1, marginBottom: 1 }} />
        </Link>
      ))}
    </Box>
  )
}
