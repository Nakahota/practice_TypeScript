import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const userId = localStorage.getItem("userId");

  return userId ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;