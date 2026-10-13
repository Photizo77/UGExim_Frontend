import { apiClient } from './client'
import type { LoginRequest, LoginResponse, PortalResponse, UserProfile } from './types'

/** POST /api/v1/auth/login/ */
export async function loginUser(payload: LoginRequest): Promise<LoginResponse> {
  const { data } = await apiClient.post<LoginResponse>('/v1/auth/login/', payload)
  return data
}

/** POST /api/v1/auth/logout/ */
export async function logoutUser(): Promise<void> {
  await apiClient.post('/v1/auth/logout/')
}

/** GET /api/client-portal/me/ */
export async function fetchClientProfile(): Promise<UserProfile> {
  const { data } = await apiClient.get<PortalResponse<UserProfile>>('/client-portal/me/')
  return data.data
}
