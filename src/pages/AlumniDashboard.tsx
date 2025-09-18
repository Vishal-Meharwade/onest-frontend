import { useEffect, useState } from "react"
import { getJobs, applyJob } from "../utils/api"
import JobCard from "../components/JobCard"
import ProfileCard from "../components/ProfileCard"

export default function AlumniDashboard() {
  const [jobs, setJobs] = useState<any[]>([])
  const [profile, setProfile] = useState<any>({
    name: "John Doe",
    email: "john@example.com",
    skills: ["Java", "React", "Spring Boot"],
  })

  async function handleApply(jobId: number) {
    try {
      const alumniId = localStorage.getItem("alumniId")
      if (!alumniId) {
        alert("Alumni ID missing. Please log in again.")
        return
      }
      await applyJob(jobId, parseInt(alumniId))
      alert("Application submitted successfully ✅")
    } catch (err) {
      alert("Failed to apply for job.")
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
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        Alumni Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column: Profile */}
        <div className="md:col-span-1">
          <ProfileCard
            name={profile.name}
            email={profile.email}
            skills={profile.skills}
          />
        </div>

        {/* Right column: Job list */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold text-slate-800">Available Jobs</h2>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <JobCard key={job.id} job={job} onApply={handleApply} />
            ))
          ) : (
            <p className="text-slate-600 text-sm">No jobs available right now.</p>
          )}
        </div>
      </div>
    </div>
  )
}
