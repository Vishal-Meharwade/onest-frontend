import { useLocation, useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import { login } from "../utils/api"

export default function Login() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const role = params.get("role") || "alumni"

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      const { token, role: userRole, userId } = await login(email, password)
      localStorage.setItem("token", token)
      localStorage.setItem("role", userRole)
      localStorage.setItem("userId", userId)

      if (userRole === "alumni") {
        navigate("/alumni/dashboard")
      } else if (userRole === "employer") {
        navigate("/employer/dashboard")
      } else {
        navigate("/")
      }
    } catch (err) {
      alert("Login failed. Please check credentials.")
    }
  }

  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-full max-w-md bg-white p-8 shadow rounded-xl">
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-6">
          {role === "employer" ? "Employer Login" : "Alumni Login"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-slate-600">
          No account yet?{" "}
          <Link
            to={`/register?role=${role}`}
            className="text-indigo-600 hover:underline"
          >
            Register as {role}
          </Link>
        </div>
      </div>
    </div>
  )
}
