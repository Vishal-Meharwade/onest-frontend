// src/pages/Home.tsx
import { Link } from 'react-router-dom'

type FeatureCardProps = { title: string; text: string }
type JobCardProps = { title: string; company: string; location: string; skills: string[]; match: string }
type BigCardProps = { title: string; desc: string }

function FeatureCard({ title, text }: FeatureCardProps) {
  return (
    <div className="bg-gradient-to-br from-white to-indigo-50 border border-gray-100 p-4 rounded-2xl shadow-sm">
      <div className="text-indigo-600 font-semibold">{title}</div>
      <div className="mt-2 text-sm text-slate-600">{text}</div>
    </div>
  )
}

function JobCard({ title, company, location, skills, match }: JobCardProps) {
  return (
    <div className="flex items-start justify-between p-3 border rounded-lg">
      <div>
        <div className="font-semibold text-slate-800">{title}</div>
        <div className="text-sm text-slate-500">
          {company} • {location}
        </div>
        <div className="mt-2 text-xs text-slate-600 flex gap-2 flex-wrap">
          {skills.map((s) => (
            <span
              key={s}
              className="px-2 py-1 bg-slate-100 rounded text-slate-700"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="text-right">
        <div className="text-sm text-slate-500">Match</div>
        <div className="font-bold text-indigo-600">{match}</div>
      </div>
    </div>
  )
}

function BigCard({ title, desc }: BigCardProps) {
  return (
    <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow">
      <h3 className="font-bold text-slate-800">{title}</h3>
      <p className="mt-3 text-slate-600">{desc}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* HERO */}
      <section className="pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900">
              Alumni Job Connect{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Verified Skills, Local Jobs
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              A plug-and-play platform for colleges with minimal tech capacity:
              onboard alumni via web or WhatsApp, auto-generate Skill Passports,
              and match them to local employers, all with zero manual effort.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/login?role=alumni"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-[1.01] transition"
              >
                Find Jobs
              </Link>
              <Link
                to="/login?role=employer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-indigo-100 text-indigo-700 font-semibold bg-white hover:bg-indigo-50"
              >
                Post a Job
              </Link>
            </div>

            <div id="how" className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <FeatureCard
                title="Skill Passport"
                text="Auto-extracted & syllabus-verified skill cards so employers can trust candidate abilities."
              />
              <FeatureCard
                title="Easy Onboarding"
                text="Register via web or WhatsApp — alumni onboard in under a minute."
              />
              <FeatureCard
                title="Referral Engine"
                text="Alumni referrals are tracked and rewarded — reduces time-to-hire."
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              {/* sample jobs carousel/list (static for now) */}
              <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold mb-4">Sample open roles</h3>
                <div className="space-y-4">
                  <JobCard
                    title="Backend Developer"
                    company="LocalTech"
                    location="Bengaluru"
                    skills={['Java', 'Spring Boot', 'SQL']}
                    match="84%"
                  />
                  <JobCard
                    title="Frontend Developer"
                    company="UIWorks"
                    location="Pune"
                    skills={['React', 'Tailwind', 'JS']}
                    match="76%"
                  />
                  <JobCard
                    title="Data Analyst"
                    company="DataPulse"
                    location="Hyderabad"
                    skills={['SQL', 'Python', 'Excel']}
                    match="69%"
                  />
                </div>
              </div>

              <div className="p-4 bg-slate-50 text-sm text-slate-500">
                Tip: When we connect to the backend, this list will show real,
                matched jobs tailored to your Skill Passport.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES ANCHOR */}
      <section
        id="features"
        className="py-12 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold text-slate-800 mb-6">
            Why AlumniConnect?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BigCard
              title="Zero manual verification"
              desc="Automatic certificate + skill verification reduces college administrative load."
            />
            <BigCard
              title="Employer-friendly"
              desc="Employers get a match percent and verified skill passports to speed hiring."
            />
            <BigCard
              title="Local hiring focus"
              desc="Encourages local job discovery and alumni referrals within communities."
            />
          </div>
        </div>
      </section>
    </div>
  )
}
