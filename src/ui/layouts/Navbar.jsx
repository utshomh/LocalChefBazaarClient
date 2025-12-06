import { Link, NavLink } from "react-router";
import { MdMenu } from "react-icons/md";

import Logo from "../shared/Logo";

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
  const user = {
    image:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
  };

  const navLinks = (user ? privateLinks : publicLinks).map((link, index) => (
    <li key={index}>
      <NavLink
        to={link.path}
        className={({ isActive }) =>
          `px-4 ${
            isActive ? "bg-accent font-bold" : "font-semibold"
          } rounded-full`
        }
      >
        {link.label}
      </NavLink>
    </li>
  ));

  return (
    <div className="navbar bg-base-100 shadow-sm rounded-box">
      <div className="navbar-start gap-1">
        <div className="dropdown">
          <div
            tabIndex="0"
            role="button"
            className="btn btn-ghost p-2 lg:hidden"
          >
            <MdMenu className="text-2xl" />
          </div>
          <ul
            tabIndex="0"
            className="menu gap-1 dropdown-content bg-base-100 rounded-box mt-4 w-52 p-2 shadow z-1"
          >
            {navLinks}
          </ul>
        </div>

        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <button
              tabIndex="1"
              role="button"
              className="btn btn-ghost btn-circle avatar border-3 border-transparent hover:border-accent transition-colors duration-500 ease-in-out"
            >
              <div className="w-10 rounded-full">
                <img src={user.image} />
              </div>
            </button>
            <ul
              tabIndex="1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-4 w-52 p-2 shadow"
            >
              <button className="btn btn-accent">Logout</button>
            </ul>
          </div>
        ) : (
          <div className="w-fit flex items-center gap-2">
            <Link
              to="/login"
              className="btn btn-outline border-2 border-base-200"
            >
              Login
            </Link>
            <Link to="/register" className="btn btn-accent font-bold">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
