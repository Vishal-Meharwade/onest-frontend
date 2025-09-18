import { useEffect, useState } from "react"
import { getJobs, postJob } from "../utils/api"
import JobPostForm from "../components/JobPostForm"


export default function EmployerDashboard() {
  const [jobs, setJobs] = useState<any[]>([])

  async function handlePost(jobData: any) {
    try {
      const job = await postJob(jobData)
      setJobs([...jobs, job])
    } catch (err) {
      alert("Failed to post job.")
    }
  }

  useEffect(() => {
    async function fetchJobs() {
      try {
        const data = await getJobs()
        setJobs(data)
      } catch (err) {
        console.error("Error fetching jobs", err)
      }
    }
    fetchJobs()
  }, [])

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 space-y-8">
      <h1 className="text-2xl font-bold text-slate-800">Employer Dashboard</h1>

      <JobPostForm onPost={handlePost} />

      <div>
        <h2 className="text-xl font-bold mb-4">Your Jobs</h2>
        <div className="space-y-3">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border rounded-xl shadow-sm p-4"
            >
              <div className="font-semibold">{job.title}</div>
              <div className="text-sm text-slate-600">{job.location}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
