import { useEffect, useState } from "react"
import { getApplicationsForEmployer } from "../../utils/api.ts"

export default function ApplicationsForEmployer() {
  const [applications, setApplications] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchApplications() {
      try {
        const employerId = localStorage.getItem("employerId")
        if (!employerId) {
          alert("Employer ID missing. Please log in again.")
          return
        }
        const data = await getApplicationsForEmployer(parseInt(employerId))
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
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        Applications to My Jobs
      </h1>

      {applications.length > 0 ? (
        <div className="overflow-x-auto bg-white rounded-xl shadow border">
          <table className="w-full text-sm text-left text-slate-600">
            <thead className="bg-slate-50 text-slate-700 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">Job Title</th>
                <th className="px-4 py-3">Alumni Name</th>
                <th className="px-4 py-3">Skills</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="border-b hover:bg-slate-50">
                  <td className="px-4 py-3">{app.jobTitle}</td>
                  <td className="px-4 py-3">{app.alumniName}</td>
                  <td className="px-4 py-3">
                    {app.skills?.map((s: string) => (
                      <span
                        key={s}
                        className="px-2 py-1 text-xs bg-slate-100 rounded mr-2"
                      >
                        {s}
                      </span>
                    ))}
                  </td>
                  <td className="px-4 py-3">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-slate-600">No one has applied to your jobs yet.</p>
      )}
    </div>
  )
}
