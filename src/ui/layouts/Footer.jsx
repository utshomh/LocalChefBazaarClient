import { Link } from "react-router";
import {
  FaTwitter,
  FaFacebookF,
  FaGithub,
  FaPhone,
  FaMarker,
} from "react-icons/fa6";

import Logo from "../shared/Logo";
import { FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 items-start flex-wrap rounded-box">
      <aside className="self-center flex flex-col items-end gap-1">
        <Logo />
        <p className="text-end">
          Providing reliable foods since 2025
          <br />
          All rights preserved
        </p>
      </aside>

      <div className="space-y-2">
        <h6 className="footer-title">Contact</h6>
        <p className="flex flex-col gap-1">
          <span className="flex items-center gap-1">
            <FaPhone /> +880 1234-567890
          </span>
          <span className="flex items-center gap-1">
            <FaMailBulk /> support@localchefbazaar.com
          </span>
          <span className="flex items-center gap-1">
            <FaMarker /> Tejgaon, Bangladesh
          </span>
        </p>
      </div>

      <div className="space-y-2">
        <h6 className="footer-title">Working Hours</h6>
        <p className="flex flex-col gap-1">
          <span>Sun – Thu: 9:00 AM – 10:00 PM</span>
          <span>Fri: Closed</span>
          <span>Sat: 10:00 AM – 8:00 PM</span>
        </p>
      </div>

      <nav className="space-y-2">
        <h6 className="footer-title">Social Links</h6>
        <div className="flex items-center gap-4">
          <Link to="#">
            <FaTwitter className="text-xl hover:text-accent transition-colors" />
          </Link>
          <Link to="#">
            <FaFacebookF className="text-xl hover:text-accent transition-colors" />
          </Link>
          <Link to="#">
            <FaGithub className="text-xl hover:text-accent transition-colors" />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
