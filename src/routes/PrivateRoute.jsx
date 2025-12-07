import { useLocation, Navigate } from "react-router";

import useAuth from "../hooks/useAuth";
import Loader from "../ui/shared/Loader";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const { user, loading } = useAuth();

  if (loading) return <Loader />;

  if (!user) <Navigate to="/login" state={{ redirect: pathname }} />;

  return children;
};

export default PrivateRoute;
