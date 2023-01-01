import { Box, Paper, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'
import { BookmarkList, BookmarkModel } from '../components/Bookmark'
import { Header } from '../components/Header'
import { Tags } from '../components/Tags'

export default function Home() {
  const authorized = true
  return (
    <Container maxWidth={false} disableGutters>
      <Header authorized={authorized} />
      <Container maxWidth="lg" sx={{ width: '100%' }}>
        <Grid container spacing={2} direction="row-reverse">
          <Grid xs={12} md={9}>
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

export const tags = ['ex1', 'ex2', 'ex3', 'ex4', 'ex5', 'ex6', 'ex7', 'ex8', 'ex9', 'ex10', 'ex11', 'ex12']

export const bookmarks: BookmarkModel[] = [
  {
    url: new URL(
      'http://example.com/example/example/example/example/example/example/example/example/example/example/example/example/example/example/example/'
    ),
    title: 'example1',
    updated: new Date(),
    created: new Date(),
    comment:
      'example example example example example example example example example example example example example example example example example example example example example example example example example example example example example example example example example example example example example example example example example example example',
    iconUrl: undefined,
    tags: ['ex1', 'ex2', 'ex3', 'ex4'],
  },
  {
    url: new URL('http://example.com/1'),
    title: 'example2',
    updated: new Date(),
    created: new Date(),
    comment: 'example',
    iconUrl: undefined,
    tags: ['ex1', 'ex2', 'ex3', 'ex4'],
  },
  {
    url: new URL('http://example.com/2'),
    title: 'example3',
    updated: new Date(),
    created: new Date(),
    comment: 'example',
    iconUrl: undefined,
    tags: ['ex1', 'ex2', 'ex3', 'ex4'],
  },
]
