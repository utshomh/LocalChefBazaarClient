import { Outlet } from "react-router";

import Navbar from "../ui/layouts/Navbar";
import Footer from "../ui/layouts/Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
