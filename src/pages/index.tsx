import { CognitoUser } from '@aws-amplify/auth'
import { Box, Paper, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'
import { Auth } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { BookmarkList, BookmarkModel } from '../components/Bookmark'
import { Header } from '../components/Header'
import { Tags } from '../components/Tags'

export default function Home() {
  const [user, setUser] = useState<CognitoUser>()
  useEffect(() => {
    ;(async () => {
      try {
        const user = await Auth.currentAuthenticatedUser()
        setUser(user)
      } catch {}
    })()
  }, [])
  console.log('hog')
  return (
    <Container maxWidth={false} disableGutters>
      <Header />
      <Container maxWidth="lg" sx={{ width: '100%' }}>
        <Grid container spacing={2} direction="row-reverse">
          <Grid xs={12} md={9}>
            <BookmarkList bookmarks={bookmarks} editable={user !== undefined} />
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

export const tags = [
  'ex1',
  'ex2',
  'ex3',
  'ex4',
  'ex5',
  'ex6',
  'ex7',
  'ex8',
  'ex9',
  'ex10',
  'ex11',
  'ex12',
  'ex13',
  'ex14',
  'ex15',
  'ex16',
  'ex17',
  'ex18',
  'ex19',
  'ex20',
  'ex21',
  'ex22',
  'ex23',
  'ex24',
  'ex25',
  'ex26',
  'ex27',
  'ex28',
  'ex29',
  'ex30',
  'ex31',
  'ex32',
  'ex33',
  'ex34',
  'ex35',
  'ex36',
  'ex37',
  'ex38',
  'ex39',
  'ex40',
  'ex41',
  'ex42',
  'ex43',
  'ex44',
  'ex45',
  'ex46',
  'ex47',
]

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
