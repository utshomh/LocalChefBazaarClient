import { Link } from "react-router";
import logo from "../../assets/images/logo.svg";

const Logo = () => {
  return (
    <Link to="/" className="flex items-end group gap-1">
      <img
        src={logo}
        className="aspect-square w-8 md:w-12 -rotate-12 transition-all duration-300 ease-out 
                   group-hover:rotate-0 group-hover:scale-110 group-hover:drop-shadow-sm"
      />

      <div className="relative">
        <div className="h-1 w-0 bg-primary/80 rounded-full group-hover:w-full transition-all duration-500 ease-in-out" />
        <div className="absolute top-0 h-1 w-full bg-primary/20 rounded-full -z-10" />

        <h1
          className="text-xl md:text-2xl font-black tracking-tight transition-all duration-300 
                       group-hover:text-base-content/80 group-hover:translate-x-0.5"
        >
          LocalChefBazaar
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
