import { useEffect, useState } from "react"
import { getMyApplications } from "../../utils/api"

export default function ApplicationsList() {
  const [applications, setApplications] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchApplications() {
      try {
        const alumniId = localStorage.getItem("alumniId")
        if (!alumniId) {
          alert("Alumni ID missing. Please log in again.")
          return
        }
        const data = await getMyApplications(parseInt(alumniId))
        setApplications(data)
      } catch (err) {
        console.error("Error fetching applications", err)
      } finally {
        setLoading(false)
      }
    }
    fetchApplications()
  }, [])

  if (loading) {
    return <p className="text-center mt-10">Loading applications...</p>
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        My Applications
      </h1>

      {applications.length > 0 ? (
        <ul className="space-y-4">
          {applications.map((app) => (
            <li
              key={app.id}
              className="border rounded-lg p-4 shadow-sm bg-white"
            >
              <h2 className="text-lg font-semibold">{app.jobTitle}</h2>
              <p className="text-slate-600">{app.jobDescription}</p>
              <p className="text-sm text-slate-500 mt-2">
                Employer: {app.employerName}
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Status:{" "}
                <span
                  className={`font-medium ${
                    app.status === "PENDING"
                      ? "text-yellow-600"
                      : app.status === "ACCEPTED"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {app.status}
                </span>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-slate-600">You haven’t applied for any jobs yet.</p>
      )}
    </div>
  )
}
