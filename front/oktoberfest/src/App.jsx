import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Add from './pages/Add.jsx'
import AddPage from './pages/AddPage.jsx'
import WorkersPage from './pages/WorkersPage.jsx'
import ProtectedRoute from './pages/ProtectedRoute.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/code/:code" element={<Add />} />
      <Route path="*" element={<LoginPage />} />
      <Route path="/test" element={<ProtectedRoute />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
      />
      <Route path="/create" element={
        <ProtectedRoute>
          <Add isManager={true} />
        </ProtectedRoute>
      } />
      <Route path="/add" element={
        <ProtectedRoute>
          <AddPage />
        </ProtectedRoute>
      } />
      <Route path="/workers" element={
        <ProtectedRoute>
          <WorkersPage />
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default App