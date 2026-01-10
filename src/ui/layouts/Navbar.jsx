import { Link, NavLink } from "react-router";
import { MdMenu } from "react-icons/md";

import useAuth from "../../hooks/useAuth";
import Logo from "../shared/Logo";
import UserDropdown from "../shared/UserDropdown";
import ThemeToggle from "../shared/ThemeToggle";

const privateLinks = [
  { path: "/", label: "Home" },
  { path: "/dashboard", label: "Dashboard" },
  { path: "/meals", label: "Meals" },
];

const publicLinks = [
  { path: "/", label: "Home" },
  { path: "/meals", label: "Meals" },
];

const Navbar = () => {
  const { user } = useAuth();

  const navLinks = (user ? privateLinks : publicLinks).map((link, index) => (
    <li key={index}>
      <NavLink
        to={link.path}
        className={({ isActive }) =>
          `px-4 py-2 font-semibold transition-all duration-300 transform hover:scale-105 ${
            isActive
              ? "bg-accent text-accent-content shadow-md"
              : "bg-transparent hover:bg-accent/20"
          } rounded-full`
        }
      >
        {link.label}
      </NavLink>
    </li>
  ));

  return (
    <div className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md navbar px-0 md:px-4 rounded-b-box hover:shadow-md transition-all duration-300">
      <div className="navbar-start gap-1">
        <div className="dropdown">
          <div
            tabIndex="0"
            role="button"
            className="btn btn-ghost p-2 md:hidden hover:bg-accent/20 transition-colors"
          >
            <MdMenu className="text-2xl" />
          </div>
          <ul
            tabIndex="0"
            className="menu gap-2 dropdown-content bg-base-100 rounded-box mt-4 w-52 p-2 z-1 shadow-2xl border border-base-300"
          >
            {navLinks}
          </ul>
        </div>

        <Logo />
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>

      <div className="navbar-end gap-2">
        <ThemeToggle />
        {user ? (
          <UserDropdown user={user} />
        ) : (
          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="btn btn-primary btn-outline font-bold hover:scale-105 active:scale-95 transition-all"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-primary shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95 transition-all"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
