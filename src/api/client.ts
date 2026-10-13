import axios from 'axios'

/** localStorage key for the DRF auth token returned by the login endpoint. */
export const TOKEN_STORAGE_KEY = 'ugexim_token'

/** Base URL comes from `.env` (`VITE_API_BASE_URL`), falling back to localhost. */
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000/api',
  headers: { 'Content-Type': 'application/json' },
})

// Attach the auth token to every request. DRF TokenAuthentication expects
// the `Authorization: Token <key>` header.
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY)
  if (token) {
    config.headers.Authorization = `Token ${token}`
  }
  return config
})

// If a request comes back 401, the token is no longer valid — drop it so the
// next route guard redirects to /login.
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      localStorage.removeItem(TOKEN_STORAGE_KEY)
    }
    return Promise.reject(error)
  },
)

/**
 * Extract a human-readable message from an axios/DRF error.
 * DRF validation errors look like `{ field: ["message"] }` or
 * `{ non_field_errors: ["message"] }`.
 */
export function getApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const data: unknown = error.response?.data

    if (data && typeof data === 'object') {
      const messages: string[] = []
      for (const value of Object.values(data as Record<string, unknown>)) {
        if (typeof value === 'string') {
          messages.push(value)
        } else if (Array.isArray(value)) {
          for (const item of value) {
            if (typeof item === 'string') messages.push(item)
          }
        }
      }
      if (messages.length > 0) return messages[0]
    }

    if (error.message) return error.message
  }

  return 'Something went wrong. Please try again.'
}
