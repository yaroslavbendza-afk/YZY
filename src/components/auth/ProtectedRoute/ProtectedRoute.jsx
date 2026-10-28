import { Navigate, Outlet, useLocation } from "react-router";

export default function ProtectedRoute({ isLoggedIn }) {
  const location = useLocation();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" replace state={{ from: location }} />
  );
}
