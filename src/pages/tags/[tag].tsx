import { Box, Paper, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'
import { GetStaticPropsResult } from 'next'
import { BookmarkList } from '../../components/Bookmark'
import { Header } from '../../components/Header'
import { Tags } from '../../components/Tags'
import { bookmarks, tags } from '../index'

interface TagsPageProps {
  tag: string
}

export default function TagsPage({ tag }: TagsPageProps) {
  const authorized = true

  return (
    <Container maxWidth={false} disableGutters>
      <Header authorized={authorized} />
      <Container maxWidth="lg" sx={{ width: '100%' }}>
        <Grid container spacing={2} direction="row-reverse">
          <Grid xs={12} md={9}>
            <Typography variant="h3" p={2}>
              Bookmarks for {tag}:
            </Typography>
            <BookmarkList bookmarks={bookmarks} editable={authorized} />
          </Grid>
          <Grid xs={12} md={3}>
            <Paper sx={{ height: '100%' }}>
              <Box p={2}>
                <Typography variant="h4" pb={2}>
                  Tags
                </Typography>
                <Tags tags={tags} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export async function getStaticPaths() {
  const paths = tags.map((tag) => ({
    params: {
      tag,
    },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps(context: any): Promise<GetStaticPropsResult<Props>> {
  const { tag } = context.params as {
    tag: string
  }
  return {
    props: {
      tag,
    },
  }
}
