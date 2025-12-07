import { use } from "react";

import { AuthContext } from "../providers/AuthProvider";

const useAuth = () => {
  const auth = use(AuthContext);

  if (!auth) {
    throw new Error("useAuth is only usable inside an AuthProvider");
  }

  return auth;
};

export default useAuth;
