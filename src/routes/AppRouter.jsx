import { createBrowserRouter, RouterProvider } from "react-router";

// Layouts
import DefaultLayout from "../layouts/DefaultLayout";
import RootLayout from "../layouts/RootLayout";
// Pages
import HomePage from "../pages/HomePage";
// Common
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <RootLayout />,
        children: [{ path: "", element: <HomePage /> }],
      },
    ],
  },
]);

const AppRouter = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};

export default AppRouter;
