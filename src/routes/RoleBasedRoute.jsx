import { useLocation, Navigate, Outlet } from "react-router";

import useUser from "../hooks/useUser";
import Loader from "../ui/shared/Loader";
import alert from "../utils/alert";

const RoleBasedRoute = ({ role }) => {
  const { pathname } = useLocation();
  const { user, error, isLoading, isError } = useUser();

  if (isLoading) return <Loader />;

  if (isError) throw new Error(error.message);

  if (user.role !== role) {
    alert.error(
      "Access Denied",
      "You do not have permission to view this page."
    );
    return <Navigate to="/dashboard" state={{ redirect: pathname }} replace />;
  }

  return <Outlet />;
};

export default RoleBasedRoute;
