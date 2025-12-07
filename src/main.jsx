import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/main.css";
import AppRouter from "./routes/AppRouter";
import AuthProvider from "./providers/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </StrictMode>
);
