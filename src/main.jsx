import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/main.css";
import AppRouter from "./routes/AppRouter";
import AuthProvider from "./providers/AuthProvider";
import QueryProvider from "./providers/QueryProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </QueryProvider>
  </StrictMode>
);
