import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const LoginPage = lazy(() => import('./pages/LoginPage.jsx'));
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'));
const Add = lazy(() => import('./pages/Add.jsx'));
const AddPage = lazy(() => import('./pages/AddPage.jsx'));
const WorkersPage = lazy(() => import('./pages/WorkersPage.jsx'));
const ProtectedRoute = lazy(() => import('./pages/ProtectedRoute.jsx'));
import LoadingPage from './pages/LoadingPage.jsx';

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/code/:code" element={<Add />} />
        <Route path="*" element={<LoginPage />} />

        <Route path="/test" element={<ProtectedRoute />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <Add isManager={true} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <AddPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/workers"
          element={
            <ProtectedRoute>
              <WorkersPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;