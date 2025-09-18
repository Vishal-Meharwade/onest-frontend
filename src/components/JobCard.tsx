type Job = {
  id: number
  title: string
  description: string
  location: string
  requiredSkills: string[]
  status: string
  postedDate: string
}

export default function JobCard({
  job,
  onApply,
}: {
  job: Job
  onApply?: (id: number) => void
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">{job.title}</h3>
          <p className="text-sm text-slate-600">{job.location}</p>
        </div>
        {onApply && (
          <button
            onClick={() => onApply(job.id)}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow hover:opacity-90"
          >
            Apply
          </button>
        )}
      </div>

      <p className="mt-3 text-slate-700 text-sm">{job.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {job.requiredSkills?.map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 text-xs bg-slate-100 text-slate-700 rounded"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-4 text-xs text-slate-500">
        Posted on {new Date(job.postedDate).toLocaleDateString()} •{" "}
        {job.status}
      </div>
    </div>
  )
}
