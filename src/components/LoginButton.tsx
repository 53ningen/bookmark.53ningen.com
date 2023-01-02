import { Button } from '@mui/material'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { LoginDialog } from './LoginDialog'

export const LoginButton = () => {
  const { isLoggedIn, logout, initialized } = useAuth()
  const [dialogOpen, setDialogOpen] = useState(false)
  const buttonOnClick = async () => {
    if (isLoggedIn()) {
      await logout()
    } else {
      setDialogOpen(true)
    }
  }
  const handleClose = () => {
    setDialogOpen(false)
  }
  const onLoggedIn = () => {
    setDialogOpen(false)
  }
  return (
    <>
      <Button color="inherit" onClick={buttonOnClick} sx={{ display: initialized ? 'inherit' : 'none' }}>
        {isLoggedIn() ? 'LOGOUT' : 'LOGIN'}
      </Button>
      <LoginDialog open={dialogOpen} handleClose={handleClose} onLoggedIn={onLoggedIn} />
    </>
  )
}
