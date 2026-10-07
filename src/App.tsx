import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './AuthPages/Login'
import CreateAccount from './AuthPages/CreateAccount'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />

        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App