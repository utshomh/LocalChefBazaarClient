import { Link } from "react-router";
import { FaTwitter, FaFacebookF, FaGithub, FaPhone } from "react-icons/fa6";
import { FaMailBulk, FaMapMarker } from "react-icons/fa";

import Logo from "../shared/Logo";

const Footer = () => {
  return (
    <footer className="footer bg-base-300 text-base-content p-10 rounded-t-box">
      <aside className="mx-auto flex flex-col items-end gap-1">
        <Logo />
        <p className="text-center">
          Providing reliable foods since 2025
          <br />
          All rights preserved
        </p>
      </aside>

      <div className="w-full max-w-2xl mx-auto flex items-start justify-between gap-6">
        <div className="space-y-2">
          <h6 className="font-bold text-lg">Working Hours</h6>
          <p className="flex flex-col gap-1">
            <span>
              <strong>Fri:</strong> Closed
            </span>
            <span>
              <strong>Sat:</strong> 10:00 AM – 8:00 PM
            </span>
            <span>
              <strong>Sun – Thu:</strong> 9:00 AM – 10:00 PM
            </span>
          </p>
        </div>

        <div className="space-y-2">
          <h6 className="font-bold text-lg">How to Reach Us</h6>
          <p className="flex flex-col gap-1">
            <span className="flex items-center gap-1">
              <FaPhone /> +880 1234-567890
            </span>
            <span className="flex items-center gap-1">
              <FaMailBulk /> support@localchefbazaar.com
            </span>
            <span className="flex items-center gap-1">
              <FaMapMarker /> Tejgaon, Bangladesh
            </span>
          </p>
        </div>

        <nav className="space-y-2">
          <h6 className="font-bold text-lg">Social Links</h6>
          <div className="flex items-center gap-4">
            <Link to="#">
              <FaTwitter className="text-xl hover:text-primary transition-colors" />
            </Link>
            <Link to="#">
              <FaFacebookF className="text-xl hover:text-primary transition-colors" />
            </Link>
            <Link to="#">
              <FaGithub className="text-xl hover:text-primary transition-colors" />
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
