// src/components/Footer.tsx
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-slate-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-bold">
              AC
            </div>
            <div>
              <div className="text-xl font-bold">AlumniConnect</div>
              <div className="text-sm text-white/70">
                Connecting colleges, alumni & employers
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm text-white/70 max-w-sm">
            Empowering small colleges with low tech capacity — verified skill
            passports, easy referrals and local hiring.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <a href="#features" className="hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#how" className="hover:text-white">
                How it works
              </a>
            </li>
            <li>
              <Link to="/login?role=alumni" className="hover:text-white">
                Alumni Login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-white/80">
            Email: hello@alumniconnect.example
          </p>
          <p className="text-sm text-white/80 mt-2">Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-white/60 flex justify-between">
          <div>
            © {new Date().getFullYear()} AlumniConnect — Built for low-tech
            colleges
          </div>
          <div>Privacy • Terms</div>
        </div>
      </div>
    </footer>
  )
}
