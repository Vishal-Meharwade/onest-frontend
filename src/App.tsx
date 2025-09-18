// src/App.tsx
import { Routes, Route, useSearchParams } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import AlumniDashboard from './pages/AlumniDashboard'
import EmployerDashboard from './pages/EmployerDashboard'
import Register from './pages/Register'

function LoginPlaceholder() {
  const [searchParams] = useSearchParams()
  const role = searchParams.get('role') || 'alumni'

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="w-full max-w-md p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl">
        <h2 className="text-2xl font-extrabold mb-2 text-slate-800">
          Sign in — {role === 'employer' ? 'Employer' : 'Alumni'}
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          This is a placeholder login UI. We'll wire it to the backend in the next step.
        </p>

        <div className="space-y-4">
          <input
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder="Email"
          />
          <input
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder="Password"
            type="password"
          />
          <button className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow">
            Sign in
          </button>
          <div className="text-center text-sm text-slate-500">
            Or sign in with{' '}
            <span className="font-medium text-indigo-600">Google</span> (coming soon)
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/bg-pattern.svg')] bg-top bg-no-repeat">
      <Navbar />
      <main className="flex-grow">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/alumni/dashboard" element={<AlumniDashboard />} />
            <Route path="/employer/dashboard" element={<EmployerDashboard />} />
          </Routes>
      </main>
      <Footer />
    </div>
  )
}
