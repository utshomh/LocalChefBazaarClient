import { NavLink } from "react-router";
import {
  FaUser,
  FaBox,
  FaStar,
  FaHeart,
  FaPlusCircle,
  FaList,
  FaClipboardList,
  FaUsers,
  FaUserShield,
  FaChartBar,
  FaPowerOff,
} from "react-icons/fa";

import useUser from "../../hooks/useUser";
import Logout from "../../ui/auth/Logout";
import Loader from "../../ui/shared/Loader";
import ThemeToggle from "../shared/ThemeToggle";

const navLinks = {
  user: [
    { path: "/dashboard/user/orders", name: "My Orders", icon: FaBox },
    { path: "/dashboard/user/reviews", name: "My Reviews", icon: FaStar },
    { path: "/dashboard/user/favorites", name: "My Favorites", icon: FaHeart },
  ],
  chef: [
    {
      path: "/dashboard/chef/new-meal",
      name: "Create Meal",
      icon: FaPlusCircle,
    },
    { path: "/dashboard/chef/meals", name: "My Meals", icon: FaList },
    {
      path: "/dashboard/chef/orders",
      name: "Order Requests",
      icon: FaClipboardList,
    },
  ],
  admin: [
    { path: "/dashboard/admin/users", name: "Manage Users", icon: FaUsers },
    {
      path: "/dashboard/admin/roles",
      name: "Manage Roles",
      icon: FaUserShield,
    },
    { path: "/dashboard/admin/stats", name: "Stats", icon: FaChartBar },
  ],
};

const Sidebar = () => {
  const { user, error, isError, isLoading } = useUser();

  if (isLoading) return <Loader />;
  if (isError) throw new Error(error.message);

  return (
    /* FIXED: Added w-64 for open state and transition-width */
    <div
      className="py-2 min-h-full flex flex-col items-start bg-base-200 transition-all duration-300 shadow-xl border-r border-base-300
      is-drawer-close:w-20 is-drawer-open:w-64 w-64 lg:w-72 rounded-box rounded-b-none"
    >
      <ul className="menu w-full grow items-center gap-2 px-2">
        <li className="w-full flex items-center justify-center py-2">
          <ThemeToggle />
        </li>

        {/* Profile Link */}
        <li
          className="w-full group is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Profile"
        >
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 font-semibold transition-all duration-300 ${
                isActive ? "bg-accent/50" : "bg-inherit"
              } hover:bg-accent/30 hover:translate-x-1`
            }
          >
            <FaUser className="text-xl transition-transform group-hover:scale-110" />
            <span className="is-drawer-close:hidden font-bold">Profile</span>
          </NavLink>
        </li>

        {/* Dynamic Links */}
        {navLinks[user.role].map((link, i) => {
          const Icon = link.icon;
          return (
            <li
              key={i}
              className="w-full group is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip={link.name}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 font-semibold transition-all duration-300 ${
                    isActive ? "bg-accent/50" : "bg-inherit"
                  } hover:bg-accent/25 hover:translate-x-1`
                }
              >
                <Icon className="text-xl transition-transform group-hover:scale-110" />
                <span className="is-drawer-close:hidden font-bold">
                  {link.name}
                </span>
              </NavLink>
            </li>
          );
        })}

        <li
          className="w-full group is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Logout"
        >
          <Logout className="btn btn-warning w-full flex items-center gap-2 transition-all active:scale-95">
            <FaPowerOff className="text-xl transition-transform group-hover:rotate-12" />
            <span className="is-drawer-close:hidden font-bold">Logout</span>
          </Logout>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
