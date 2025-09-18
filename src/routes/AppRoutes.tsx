import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../components/ProtectedRoute";
import AlumniDashboard from "../pages/AlumniDashboard";
import Navbar from "../components/Navbar";
import EmployerDashboard from "../pages/EmployerDashboard";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Alumni */}
        <Route
          path="/alumni/dashboard"
          element={
            <ProtectedRoute role="ALUMNI">
              <AlumniDashboard />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/alumni/profile"
          element={
            <ProtectedRoute role="ALUMNI">
              <Profile />
            </ProtectedRoute>
          }
        /> */}
        {/* <Route
          path="/alumni/referrals"
          element={
            <ProtectedRoute role="ALUMNI">
              <Referrals />
            </ProtectedRoute>
          }
        /> */}

        {/* Employer */}
        <Route
          path="/employer/dashboard"
          element={
            <ProtectedRoute role="EMPLOYER">
              <EmployerDashboard />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/employer/applications"
          element={
            <ProtectedRoute role="EMPLOYER">
              <Applications />
            </ProtectedRoute>
          }
        /> */}

        {/* Admin */}
        {/* <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          }
        /> */}

        {/* Default */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
