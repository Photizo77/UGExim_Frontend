import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from '@/features/portal/LandingPage'
import FinancialSolutionsPage from '@/features/portal/FinancialSolutionsPage'
import InsightsPage from '@/features/portal/InsightsPage'
import AboutPage from '@/features/portal/AboutPage'
import FAQPage from '@/features/portal/FAQPage'
import Login from '@/AuthPages/Login'
import CreateAccount from '@/AuthPages/CreateAccount'

const router = createBrowserRouter([
  { path: '/',                    element: <LandingPage /> },
  { path: '/login',               element: <Login /> },
  { path: '/create-account', element: <CreateAccount /> },
  { path: '/financial-solutions', element: <FinancialSolutionsPage /> },
  { path: '/insights',            element: <InsightsPage /> },
  { path: '/about',               element: <AboutPage /> },
  { path: '/faq',                 element: <FAQPage /> },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
