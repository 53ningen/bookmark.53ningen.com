import { Button } from '@mui/material'
import { Auth } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { LoginDialog } from './LoginDialog'

export const LoginButton = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const buttonOnClick = async () => {
    if (authenticated) {
      await Auth.signOut()
      setAuthenticated(false)
    } else {
      setDialogOpen(true)
    }
  }
  const handleClose = () => {
    setDialogOpen(false)
  }
  const onLoggedIn = () => {
    setDialogOpen(false)
    setAuthenticated(true)
  }
  useEffect(() => {
    ;(async () => {
      try {
        await Auth.currentAuthenticatedUser()
        setAuthenticated(true)
      } catch {
        setAuthenticated(false)
      }
    })()
  }, [])
  return (
    <>
      <Button color="inherit" onClick={buttonOnClick}>
        {authenticated ? 'LOGOUT' : 'LOGIN'}
      </Button>
      <LoginDialog open={dialogOpen} handleClose={handleClose} onLoggedIn={onLoggedIn} />
    </>
  )
}
