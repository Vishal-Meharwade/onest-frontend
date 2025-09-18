type ProfileProps = {
  name: string
  email: string
  skills?: string[]
}

export default function ProfileCard({ name, email, skills }: ProfileProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <h2 className="text-lg font-semibold text-slate-800">My Profile</h2>
      <p className="text-sm text-slate-600 mt-1">{email}</p>

      {skills && skills.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-medium text-slate-700 mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="px-2 py-1 rounded bg-slate-100 text-xs text-slate-700"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
