import { useEffect, useState } from "react";
import { getAlumniProfile, updateAlumniProfile } from "../../utils/api";

export default function AlumniProfile() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const alumniId = localStorage.getItem("alumniId");
        if (!alumniId) {
          alert("Alumni ID missing. Please log in again.");
          return;
        }
        const data = await getAlumniProfile(alumniId); // pass string
        setProfile(data);
      } catch (err) {
        console.error("Error loading profile", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  async function handleSave() {
    try {
      const alumniId = localStorage.getItem("alumniId");
      if (!alumniId) return;
      const updated = await updateAlumniProfile(alumniId, profile); // pass string
      setProfile(updated);
      setEditing(false);
      alert("Profile updated successfully");
    } catch (err) {
      console.error("Profile update error", err);
      alert("Failed to update profile");
    }
  }

  if (loading) {
    return <p className="text-center mt-10">Loading profile...</p>;
  }

  if (!profile) {
    return <p className="text-center mt-10 text-slate-600">No profile found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">My Profile</h1>

      <div className="bg-white p-6 rounded-xl shadow border space-y-6">
        {/* Basic Info */}
        <div>
          <label className="block text-sm font-medium text-slate-600">
            Full Name
          </label>
          <input
            type="text"
            value={profile.name || ""}
            disabled={!editing}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:bg-slate-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600">
            Email
          </label>
          <input
            type="email"
            value={profile.email || ""}
            disabled
            className="mt-1 w-full rounded-md border-gray-200 bg-slate-50 text-slate-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600">
            Location
          </label>
          <input
            type="text"
            value={profile.location || ""}
            disabled={!editing}
            onChange={(e) => setProfile({ ...profile, location: e.target.value })}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:bg-slate-50"
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block text-sm font-medium text-slate-600">Skills</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {profile.skills?.map((s: string, idx: number) => (
              <span
                key={idx}
                className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          {!editing ? (
            <button
              onClick={() => setEditing(true)}
              className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Edit
            </button>
          ) : (
            <>
              <button
                onClick={() => setEditing(false)}
                className="px-4 py-2 rounded-md border border-gray-300 text-slate-700 bg-white hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Save
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
