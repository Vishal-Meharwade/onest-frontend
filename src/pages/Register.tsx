import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import { registerAlumni, registerEmployer } from "../utils/api"

export default function Register() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const role = params.get("role") || "alumni"
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      if (role === "alumni") {
        await registerAlumni({
          name: form.name,
          email: form.email,
          password: form.password,
        })
      } else {
        await registerEmployer({
        //   name: form.name,
          email: form.email,
          password: form.password,
          companyName: form.companyName,
        })
      }
      alert("Registration successful! Please log in.")
      navigate(`/login?role=${role}`)
    } catch (err) {
      alert("Registration failed.")
    }
  }

  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-full max-w-md bg-white p-8 shadow rounded-xl">
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-6">
          {role === "employer" ? "Employer Registration" : "Alumni Registration"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border px-3 py-2 rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-3 py-2 rounded"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          {role === "employer" && (
            <input
              type="text"
              placeholder="Company Name"
              className="w-full border px-3 py-2 rounded"
              value={form.companyName}
              onChange={(e) => setForm({ ...form, companyName: e.target.value })}
              required
            />
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
