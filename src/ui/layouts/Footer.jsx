import { Link } from "react-router";
import { FaTwitter, FaFacebookF, FaGithub, FaPhone } from "react-icons/fa6";
import { FaMailBulk, FaMapMarker } from "react-icons/fa";

import Logo from "../shared/Logo";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 gap-8 bg-base-300 text-base-content p-8 md:p-12 rounded-t-box border-t border-base-content/5">
      <div className="flex flex-col items-center md:items-end gap-4">
        <div className="flex flex-col items-center md:items-end gap-1">
          <Logo />
          <p className="text-center md:text-end text-sm opacity-70">
            Providing reliable foods since 2025
            <br />
            All rights reserved
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link
            to="#"
            className="hover:-translate-y-1.5 hover:text-primary transition-all duration-300"
          >
            <FaTwitter className="text-2xl" />
          </Link>
          <Link
            to="#"
            className="hover:-translate-y-1.5 hover:text-primary transition-all duration-300"
          >
            <FaFacebookF className="text-2xl" />
          </Link>
          <Link
            to="#"
            className="hover:-translate-y-1.5 hover:text-primary transition-all duration-300"
          >
            <FaGithub className="text-2xl" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
        <div className="space-y-4">
          <h6 className="font-black text-xl border-l-4 border-accent pl-3">
            Working Hours
          </h6>
          <div className="flex flex-col gap-2 opacity-80">
            <div className="flex justify-between gap-4">
              <strong>Fri:</strong>{" "}
              <span className="text-error font-medium">Closed</span>
            </div>
            <div className="flex justify-between gap-4">
              <strong>Sat:</strong> <span>10:00 AM – 8:00 PM</span>
            </div>
            <div className="flex justify-between gap-4">
              <strong>Sun – Thu:</strong> <span>9:00 AM – 10:00 PM</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h6 className="font-black text-xl border-l-4 border-accent pl-3">
            How to Reach Us
          </h6>
          <div className="flex flex-col gap-3">
            <a
              href="tel:+8801234567890"
              className="group flex items-center gap-3 hover:text-primary transition-colors"
            >
              <div className="p-2 bg-base-100 rounded-lg group-hover:scale-110 transition-transform">
                <FaPhone />
              </div>
              <span>+880 1234-567890</span>
            </a>
            <span className="group flex items-center gap-3">
              <div className="p-2 bg-base-100 rounded-lg group-hover:scale-110 transition-transform">
                <FaMapMarker />
              </div>
              <span>Tejgaon, Bangladesh</span>
            </span>
            <a
              href="mailto:support@localchefbazaar.com"
              className="group flex items-center gap-3 hover:text-primary transition-colors"
            >
              <div className="p-2 bg-base-100 rounded-lg group-hover:scale-110 transition-transform">
                <FaMailBulk />
              </div>
              <span className="truncate">support@localchefbazaar.com</span>
            </a>
          </div>
        </div>

        {/* Map with Hover Glow */}
        <div className="w-full md:w-80 group">
          <div className="relative rounded-box overflow-hidden border-2 border-accent/20 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(var(--a),0.2)] transition-all duration-500">
            <iframe
              src="https://www.google.com/maps?q=Tejgaon,+Dhaka,+Bangladesh&output=embed"
              className="w-full h-32 md:h-40 grayscale-20 group-hover:grayscale-0 transition-all duration-700"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
