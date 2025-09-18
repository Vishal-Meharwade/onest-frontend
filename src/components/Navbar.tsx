import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="backdrop-blur-md bg-white/60 sticky top-0 z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                AC
              </div>
              <div>
                <div className="text-lg font-extrabold text-slate-800">
                  AlumniConnect
                </div>
                <div className="text-xs text-slate-500 -mt-1">
                  Jobs • Referrals • Verified Skills
                </div>
              </div>
            </Link>
          </div>

          {/* Nav Links (desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {!token && (
              <>
                <Link
                  to="/"
                  className="text-slate-700 hover:text-indigo-600 font-medium"
                >
                  Home
                </Link>
                <a href="#features" className="text-slate-600 hover:text-indigo-600">
                  Features
                </a>
                <a href="#how" className="text-slate-600 hover:text-indigo-600">
                  How it Works
                </a>
                <a href="#contact" className="text-slate-600 hover:text-indigo-600">
                  Contact
                </a>
              </>
            )}

            {role === "ALUMNI" && (
              <>
                <Link to="/alumni/dashboard" className="hover:text-indigo-600">
                  Dashboard
                </Link>
                <Link to="/alumni/profile" className="hover:text-indigo-600">
                  Profile
                </Link>
                <Link to="/alumni/referrals" className="hover:text-indigo-600">
                  Referrals
                </Link>
              </>
            )}

            {role === "EMPLOYER" && (
              <>
                <Link to="/employer/dashboard" className="hover:text-indigo-600">
                  Dashboard
                </Link>
                <Link
                  to="/employer/applications"
                  className="hover:text-indigo-600"
                >
                  Applications
                </Link>
              </>
            )}

            {role === "ADMIN" && (
              <Link to="/admin/dashboard" className="hover:text-indigo-600">
                Admin Dashboard
              </Link>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {!token ? (
              <div className="hidden md:block">
                <Link
                  to="/login?role=alumni"
                  className="px-4 py-2 rounded-md text-sm font-semibold border border-transparent hover:bg-indigo-50 hover:text-indigo-600"
                >
                  Alumni Sign in
                </Link>
                <Link
                  to="/login?role=employer"
                  className="ml-3 px-4 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow"
                >
                  Employer Login
                </Link>
              </div>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-md text-sm font-semibold bg-red-500 text-white hover:bg-red-600 shadow"
              >
                Logout
              </button>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="p-2 rounded-md bg-white/60 border border-gray-200"
              >
                <svg
                  className="w-6 h-6 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={
                      open
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/80">
          <div className="px-4 py-4 space-y-2">
            {!token ? (
              <>
                <Link to="/" className="block font-medium text-slate-700">
                  Home
                </Link>
                <a href="#features" className="block text-slate-600">
                  Features
                </a>
                <a href="#how" className="block text-slate-600">
                  How it Works
                </a>
                <div className="pt-2">
                  <Link
                    to="/login?role=alumni"
                    className="block px-3 py-2 rounded-md text-slate-700 hover:bg-indigo-50"
                  >
                    Alumni Sign in
                  </Link>
                  <Link
                    to="/login?role=employer"
                    className="mt-2 block px-3 py-2 rounded-md bg-indigo-600 text-white text-center"
                  >
                    Employer Login
                  </Link>
                </div>
              </>
            ) : (
              <div className="pt-2">
                {role === "ALUMNI" && (
                  <>
                    <Link to="/alumni/dashboard" className="block py-2">
                      Dashboard
                    </Link>
                    <Link to="/alumni/profile" className="block py-2">
                      Profile
                    </Link>
                    <Link to="/alumni/referrals" className="block py-2">
                      Referrals
                    </Link>
                  </>
                )}
                {role === "EMPLOYER" && (
                  <>
                    <Link to="/employer/dashboard" className="block py-2">
                      Dashboard
                    </Link>
                    <Link to="/employer/applications" className="block py-2">
                      Applications
                    </Link>
                  </>
                )}
                {role === "ADMIN" && (
                  <Link to="/admin/dashboard" className="block py-2">
                    Admin Dashboard
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="mt-3 block w-full px-3 py-2 rounded-md bg-red-500 text-white text-center"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
