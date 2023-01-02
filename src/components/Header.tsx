import { AppBar, Toolbar } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from './Link'
import { LoginButton } from './LoginButton'

export const Header = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Container maxWidth="lg" disableGutters>
          <Toolbar variant="dense">
            <Typography variant="h4" flexGrow={1}>
              <Link href="/" color="inherit">
                bookmark.53ningen.com
              </Link>
            </Typography>
            <LoginButton />
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  )
}
