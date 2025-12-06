import { Link } from "react-router";

import logo from "../../assets/images/logo.svg";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-1">
      <img src={logo} className="aspect-square w-12" />
      <span className="text-2xl font-bold">LocalChefBazaar</span>
    </Link>
  );
};

export default Logo;
