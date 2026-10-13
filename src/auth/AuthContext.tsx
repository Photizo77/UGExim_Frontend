import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { loginUser, logoutUser } from '@/api/auth'
import { TOKEN_STORAGE_KEY } from '@/api/client'

interface AuthContextValue {
  token: string | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem(TOKEN_STORAGE_KEY),
  )

  const login = useCallback(async (email: string, password: string) => {
    const response = await loginUser({ email, password })
    localStorage.setItem(TOKEN_STORAGE_KEY, response.token)
    setToken(response.token)
  }, [])

  const logout = useCallback(async () => {
    try {
      await logoutUser()
    } catch {
      // The token may already be invalid or the backend unreachable — still
      // clear the local session so the user is logged out on the client.
    }
    localStorage.removeItem(TOKEN_STORAGE_KEY)
    setToken(null)
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({ token, isAuthenticated: Boolean(token), login, logout }),
    [token, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
