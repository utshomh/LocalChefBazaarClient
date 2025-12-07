import { Link } from "react-router";
import { FaTwitter, FaFacebookF, FaGithub, FaPhone } from "react-icons/fa6";
import { FaMailBulk, FaMapMarker } from "react-icons/fa";

import Logo from "../shared/Logo";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10 items-start flex-wrap rounded-t-box">
      <aside className="self-center flex flex-col items-end gap-1">
        <Logo />
        <p className="text-end">
          Providing reliable foods since 2025
          <br />
          All rights preserved
        </p>
      </aside>

      <div className="gap-2">
        <h6 className="font-bold text-lg">Contact</h6>
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

      <div className="gap-2">
        <h6 className="font-bold text-lg">Working Hours</h6>
        <p className="flex flex-col gap-1">
          <span>Sun – Thu: 9:00 AM – 10:00 PM</span>
          <span>Fri: Closed</span>
          <span>Sat: 10:00 AM – 8:00 PM</span>
        </p>
      </div>

      <nav className="gap-2">
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
    </footer>
  );
};

export default Footer;
