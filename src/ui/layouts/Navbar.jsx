import { Link, NavLink } from "react-router";
import { MdMenu } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

import useAuth from "../../hooks/useAuth";
import Logo from "../shared/Logo";
import UserDropdown from "../shared/UserDropdown";
import ThemeToggle from "../shared/ThemeToggle";

const Navbar = () => {
  const { user } = useAuth();

  // 1. Primary Links: Always visible on desktop
  const primaryLinks = [
    { path: "/", label: "Home" },
    { path: "/meals", label: "Meals" },
    ...(user ? [{ path: "/dashboard", label: "Dashboard" }] : []),
  ];

  // 2. Secondary Links: Hidden in "More" dropdown on desktop
  const secondaryLinks = [
    { path: "/about", label: "About" },
    { path: "/terms", label: "Terms" },
    { path: "/support", label: "Support" },
  ];

  // Helper to render a link with your specific animations
  const renderNavLink = (link) => (
    <NavLink
      to={link.path}
      className={({ isActive }) =>
        `px-4 py-2 font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
          isActive
            ? "bg-accent text-accent-content shadow-md"
            : "bg-transparent hover:bg-accent/20"
        } rounded-full`
      }
    >
      {link.label}
    </NavLink>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md navbar px-0 md:px-4 rounded-b-box hover:shadow-md transition-all duration-300">
      <div className="navbar-start gap-1">
        {/* Mobile/Tablet Menu (Hamburger) */}
        <div className="dropdown">
          <div
            tabIndex="0"
            role="button"
            className="btn btn-ghost p-2 lg:hidden hover:bg-accent/20 transition-colors"
          >
            <MdMenu className="text-2xl" />
          </div>
          <ul
            tabIndex="0"
            className="menu gap-2 dropdown-content bg-base-100 rounded-box mt-4 w-52 p-2 z-1 shadow-2xl border border-base-300"
          >
            {/* Render ALL links in the mobile menu */}
            {[...primaryLinks, ...secondaryLinks].map((link, index) => (
              <li key={index}>{renderNavLink(link)}</li>
            ))}
          </ul>
        </div>

        <Logo />
      </div>

      {/* Desktop Menu - Centered */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 items-center">
          {/* Render Primary Links */}
          {primaryLinks.map((link, index) => (
            <li key={index}>{renderNavLink(link)}</li>
          ))}

          {/* "More" Dropdown for Secondary Links */}
          <li className="dropdown dropdown-hover dropdown-end">
            <div
              tabIndex="2"
              role="button"
              className="px-4 py-2 font-semibold hover:bg-accent/20 rounded-full flex items-center gap-1 transition-all"
            >
              More <FaChevronDown className="text-xs" />
            </div>
            <ul
              tabIndex="2"
              className="dropdown-content z-1 menu p-2 shadow-xl bg-base-100 rounded-box w-52 border border-base-200 mt-4 gap-2"
            >
              {secondaryLinks.map((link, index) => (
                <li key={index}>{renderNavLink(link)}</li>
              ))}
            </ul>
          </li>
        </ul>
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
