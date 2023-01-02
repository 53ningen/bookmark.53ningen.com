import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

interface LoginDialogProps {
  open: boolean
  handleClose: () => void
  onLoggedIn: () => void
}

export const LoginDialog = ({ open, handleClose, onLoggedIn }: LoginDialogProps) => {
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isBusy, setIsBusy] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>()
  const handleLogin = async () => {
    setIsBusy(true)
    try {
      if (username.length < 6 || password.length < 6) {
        throw Error('invalid username or password')
      }
      await login(username, password)
      setUsername('')
      setPassword('')
      setErrorMessage(undefined)
      onLoggedIn()
    } catch (e) {
      console.error(e)
      if (e instanceof Error) {
        setErrorMessage(e.message)
      }
    }
    setIsBusy(false)
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          await handleLogin()
        }}>
        <DialogTitle>Authentication</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="id"
            label="Email Address"
            value={username}
            type="email"
            disabled={isBusy}
            fullWidth
            margin="dense"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            autoFocus
            id="password"
            label="Password"
            value={password}
            type="password"
            disabled={isBusy}
            fullWidth
            margin="dense"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Alert severity="error" sx={{ display: errorMessage === undefined ? 'none' : 'flex' }}>
            {errorMessage}
          </Alert>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="primary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button type="submit" disabled={isBusy} variant="contained" color="info" onClick={handleLogin}>
            LOGIN
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
