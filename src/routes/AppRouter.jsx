import { createBrowserRouter, RouterProvider } from "react-router";

// Routes
import PrivateRoute from "./PrivateRoute";
import RoleBasedRoute from "./RoleBasedRoute";
// Layouts
import DefaultLayout from "../layouts/DefaultLayout";
import RootLayout from "../layouts/RootLayout";
import DashboardLayout from "../layouts/DashboardLayout";
// Pages
import HomePage from "../pages/public/HomePage";
import MealsPage from "../pages/public/MealsPage";
// Private
import ProfilePage from "../pages/private/ProfilePage";
import MealDetailsPage from "../pages/private/MealDetailsPage";
// Auth
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
// Admin
import UsersPage from "../pages/admin/UsersPage";
import RolesPage from "../pages/admin/RolesPage";
// Chef
import NewMealPage from "../pages/chef/NewMealPage";
import ManageMealsPage from "../pages/chef/MealsPage";
// Error
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
        children: [
          { path: "", element: <HomePage /> },
          { path: "meals", element: <MealsPage /> },
          {
            path: "meals/:id",
            element: (
              <PrivateRoute>
                <MealDetailsPage />
              </PrivateRoute>
            ),
          },
          { path: "login", element: <LoginPage /> },
          { path: "register", element: <RegisterPage /> },
        ],
      },
      {
        path: "dashboard/",
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
          { path: "", element: <ProfilePage /> },
          { path: "profile", element: <ProfilePage /> },
          {
            path: "admin/",
            element: <RoleBasedRoute role="admin" />,
            children: [
              { path: "users", element: <UsersPage /> },
              { path: "roles", element: <RolesPage /> },
            ],
          },
          {
            path: "chef/",
            element: <RoleBasedRoute role="chef" />,
            children: [
              { path: "new-meal", element: <NewMealPage /> },
              { path: "meals", element: <ManageMealsPage /> },
              // { path: "orders", element: null },
            ],
          },
        ],
      },
    ],
  },
]);

const AppRouter = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};

export default AppRouter;
