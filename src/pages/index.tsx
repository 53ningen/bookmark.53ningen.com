import { Box, Paper, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'
import { API, graphqlOperation } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { Bookmark, Tag } from '../API'
import { BookmarkList } from '../components/Bookmark'
import { Header } from '../components/Header'
import { Tags } from '../components/Tags'
import { useAuth } from '../context/AuthContext'
import { listBookmarks } from '../graphql/queries'

export default function Home() {
  const { isLoggedIn } = useAuth()
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  useEffect(() => {
    ;(async () => {
      const res = await API.graphql(graphqlOperation(listBookmarks))
      if ('data' in res && res.data.listBookmarks) {
        const items = res.data.listBookmarks.items as Bookmark[]
        setBookmarks(items)
        return
      } else if ('errors' in res) {
        throw Error('invalid response')
      } else if ('data' in res && res.data.listBookmarks === null) {
        return
      }
    })()
  }, [])
  return (
    <Container maxWidth={false} disableGutters>
      <Header />
      <Container maxWidth="lg" sx={{ width: '100%' }}>
        <Grid container spacing={2} direction="row-reverse">
          <Grid xs={12} md={9}>
            <BookmarkList bookmarks={bookmarks} editable={isLoggedIn()} />
          </Grid>
          <Grid xs={12} md={3}>
            <Paper sx={{ height: '100%' }}>
              <Box p={2}>
                <Typography variant="h4" pb={2}>
                  Tags
                </Typography>
                <Tags
                  tags={
                    bookmarks.length === 0
                      ? []
                      : bookmarks[0].tags!.items.map((b) => {
                          return { id: b!.tagID } as Tag
                        })
                  }
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}
