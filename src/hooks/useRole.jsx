import { useQuery } from "@tanstack/react-query";

import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useRole = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const {
    data: role,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["role", user.email],
    queryFn: () =>
      axios
        .get(`/users?email=${user.email}`)
        .then((res) => res.data)
        .then((data) => data[0].role),
  });

  return {
    role,
    isLoading,
    isError,
    error,
  };
};

export default useRole;
