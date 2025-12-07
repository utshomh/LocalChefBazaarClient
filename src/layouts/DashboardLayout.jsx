import { Outlet } from "react-router";
import { MdMenu } from "react-icons/md";

import Logo from "../ui/shared/Logo";
import Sidebar from "../ui/layouts/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open gap-2">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <nav className="navbar w-full bg-base-300 rounded-box p-2 gap-2">
          <label
            htmlFor="drawer"
            aria-label="Open Sidebar"
            className="btn btn-square btn-ghost"
          >
            <MdMenu className="text-2xl" />
          </label>
          <Logo />
        </nav>
        <div className="p-6">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="drawer"
          aria-label="Close Drawer"
          className="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
};

export default DashboardLayout;
