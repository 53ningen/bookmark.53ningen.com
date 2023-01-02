import { CognitoUser } from '@aws-amplify/auth'
import { Auth } from 'aws-amplify'
import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react'

interface AuthState {
  user?: CognitoUser
  initialized: boolean
  isLoggedIn: () => boolean
  login: (username: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

export const initalAppState: AuthState = {
  user: undefined,
  initialized: false,
  isLoggedIn: () => false,
  login: async (_, __) => {},
  logout: async () => {},
}

const AuthContext = createContext<AuthState>(initalAppState)

export const useAuth = () => useContext(AuthContext)

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<CognitoUser>()
  const [initialized, setInitialized] = useState(false)
  const isLoggedIn = () => {
    return user !== undefined
  }
  const login = async (username: string, password: string) => {
    const user = (await Auth.signIn(username, password)) as CognitoUser
    setUser(user)
  }
  const logout = async () => {
    await Auth.signOut()
    setUser(undefined)
  }
  const state = {
    user,
    initialized,
    isLoggedIn,
    login,
    logout,
  }
  useEffect(() => {
    ;(async () => {
      try {
        const user = (await Auth.currentAuthenticatedUser()) as CognitoUser
        setUser(user)
      } catch {}
      setInitialized(true)
    })()
  }, [])
  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}
