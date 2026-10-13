import { apiClient } from './client'
import type {
  Account,
  Application,
  ClientDocument,
  Facility,
  PortalNotification,
  PortalResponse,
} from './types'

/** GET /api/client-portal/accounts/ */
export async function fetchAccounts(): Promise<Account[]> {
  const { data } = await apiClient.get<PortalResponse<Account[]>>('/client-portal/accounts/')
  return data.data
}

/** GET /api/client-portal/applications/ */
export async function fetchApplications(): Promise<Application[]> {
  const { data } = await apiClient.get<PortalResponse<Application[]>>(
    '/client-portal/applications/',
  )
  return data.data
}

/** GET /api/client-portal/documents/ */
export async function fetchDocuments(): Promise<ClientDocument[]> {
  const { data } = await apiClient.get<PortalResponse<ClientDocument[]>>(
    '/client-portal/documents/',
  )
  return data.data
}

/** GET /api/client-portal/notifications/ */
export async function fetchNotifications(): Promise<PortalNotification[]> {
  const { data } = await apiClient.get<PortalResponse<PortalNotification[]>>(
    '/client-portal/notifications/',
  )
  return data.data
}

/** GET /api/client-portal/facilities/ */
export async function fetchFacilities(): Promise<Facility[]> {
  const { data } = await apiClient.get<PortalResponse<Facility[]>>('/client-portal/facilities/')
  return data.data
}
