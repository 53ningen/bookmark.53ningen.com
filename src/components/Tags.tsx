import { Box, Chip } from '@mui/material'
import { Tag } from '../API'
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
