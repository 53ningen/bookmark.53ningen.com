import { CacheProvider, EmotionCache } from '@emotion/react'
import { Container } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import Grid from '@mui/material/Unstable_Grid2'
import { Amplify } from 'aws-amplify'
import { AppProps } from 'next/app'
import Head from 'next/head'
import awsExports from '../aws-exports'
import { Header } from '../components/Header'
import { TagsWidget } from '../components/Tags'
import { AuthProvider } from '../context/AuthContext'
import createEmotionCache from '../createEmotionCache'
import theme from '../theme'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

Amplify.configure({ ...awsExports })

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>@gomi_ningen bookmarks</title>
      </Head>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Container maxWidth={false} disableGutters>
            <Header />
            <Container maxWidth="lg" sx={{ width: '100%' }}>
              <Grid container spacing={2} direction="row-reverse">
                <Grid xs={12} md={9}>
                  <Component {...pageProps} />
                </Grid>
                <Grid xs={12} md={3}>
                  <TagsWidget />
                </Grid>
              </Grid>
            </Container>
          </Container>
        </AuthProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}
