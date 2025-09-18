import { useState } from "react"

export default function JobPostForm({
  onPost,
}: {
  onPost: (job: {
    title: string
    description: string
    location: string
    requiredSkills: string[]
  }) => void
}) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    requiredSkills: "",
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onPost({
      title: form.title,
      description: form.description,
      location: form.location,
      requiredSkills: form.requiredSkills.split(",").map((s) => s.trim()),
    })
    setForm({ title: "", description: "", location: "", requiredSkills: "" })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 space-y-4"
    >
      <h2 className="text-lg font-semibold text-slate-800 mb-2">
        Post a New Job
      </h2>

      <input
        type="text"
        placeholder="Job Title"
        className="w-full border px-3 py-2 rounded"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Job Description"
        className="w-full border px-3 py-2 rounded"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Location"
        className="w-full border px-3 py-2 rounded"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Required Skills (comma separated)"
        className="w-full border px-3 py-2 rounded"
        value={form.requiredSkills}
        onChange={(e) => setForm({ ...form, requiredSkills: e.target.value })}
        required
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg shadow hover:opacity-90"
      >
        Post Job
      </button>
    </form>
  )
}
