// Shared API types matching the UGExim Django REST Framework backend.

/** The roles from the backend `accounts.User.ROLE_CHOICES`. */
export type Role =
  | 'client_user'
  | 'operations'
  | 'head_of_business'
  | 'relationship_officer'
  | 'business_analyst'
  | 'mcc_member'
  | 'ceo'
  | 'company_secretary'
  | 'legal'
  | 'admin'

export interface LoginRequest {
  email: string
  password: string
}

/** POST /api/v1/auth/login/ */
export interface LoginResponse {
  token: string
  user_id: string
  email: string
  role: Role
}

/** GET /api/client-portal/me/ */
export interface UserProfile {
  id: string
  email: string
  full_name: string
  role: Role
}

/** Client-portal endpoints wrap their payload in { success, message, data }. */
export interface PortalResponse<T> {
  success: boolean
  message: string
  data: T
}

/** GET /api/insights/articles/ (public knowledge-hub article). */
export interface Article {
  id: number
  category: string
  title: string
  snippet: string
  image: string
  /** ISO date, e.g. "2025-10-25". */
  published_at: string
  read_time: string
  featured: boolean
}

/** GET /api/client-portal/accounts/ */
export interface Account {
  id: number
  account_name: string
  account_number: string
  bank_name: string
  currency: string
  is_active: boolean
}

/** GET /api/client-portal/applications/ */
export interface Application {
  id: number
  reference: string
  product_type: string
  amount: string
  currency: string
  stage: string
  submitted_at: string
  updated_at: string
}

/** GET /api/client-portal/documents/ */
export interface ClientDocument {
  id: number
  name: string
  doc_type: string
  status: string
  due_date: string | null
}

/** GET /api/client-portal/notifications/ */
export interface PortalNotification {
  id: number
  category: string
  title: string
  description: string
  is_read: boolean
  created_at: string
}

/** GET /api/client-portal/facilities/ */
export interface Facility {
  id: number
  reference: string
  amount: string
  currency: string
  status: string
  term_months: number
  interest_rate: string
  created_at: string
}
