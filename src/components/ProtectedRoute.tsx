import { Navigate } from "react-router-dom";

interface Props {
  role: string;
  children: React.ReactNode;
}

export default function ProtectedRoute({ role, children }: Props) {
  const token = localStorage.getItem("token");
  const storedRole = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (role && storedRole !== role) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
