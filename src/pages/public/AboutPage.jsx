import { FaHeart, FaUtensils, FaUsers, FaCode, FaRocket } from "react-icons/fa";
import {
  SiReact,
  SiFirebase,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";

const About = () => {
  const stats = [
    { label: "Active Chefs", value: "50+", icon: FaUtensils },
    { label: "Happy Eaters", value: "1.2k+", icon: FaUsers },
    { label: "Meals Served", value: "5k+", icon: FaHeart },
  ];

  const techStack = [
    { name: "React", icon: SiReact, color: "text-blue-400" },
    { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "DaisyUI", icon: FaCode, color: "text-primary" },
  ];

  return (
    <div className="flex-1 w-full bg-base-200 p-6 md:p-12 rounded-box min-h-screen animate-in fade-in zoom-in-95 duration-500 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="badge badge-accent badge-outline font-bold p-3">
          Since 2025
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">
          Connecting <span className="text-primary">Kitchens</span> to{" "}
          <span className="text-secondary">Communities</span>
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          LocalChefBazaar is a modern online platform designed to connect home
          cooks with customers looking for fresh, healthy, and affordable
          homemade meals. We believe the best food is made with love, right at
          home.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 p-6 bg-base-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-base-300"
          >
            <div className="p-4 bg-primary/10 rounded-full text-primary">
              <stat.icon className="text-2xl" />
            </div>
            <div>
              <h3 className="text-3xl font-black">{stat.value}</h3>
              <p className="font-semibold opacity-60">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold border-l-4 border-accent pl-4">
            Our Mission
          </h2>
          <p className="text-base-content/80 text-lg">
            We aim to empower local chefs to earn from their culinary passion
            while providing the community with healthy alternatives to fast
            food.
          </p>
          <ul className="space-y-3">
            {[
              "Empower Home Cooks",
              "Ensure Food Hygiene",
              "Real-time Tracking",
              "Secure Payments",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 font-medium">
                <FaRocket className="text-success" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-base-100 p-8 rounded-2xl rotate-2 hover:rotate-0 transition-transform duration-500 shadow-lg border-2 border-base-300 border-dashed">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaCode /> Built With Modern Tech
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 bg-base-200 rounded-lg hover:bg-base-300 transition-colors cursor-default"
              >
                <tech.icon className={`text-2xl ${tech.color}`} />
                <span className="font-bold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center pt-8 border-t border-base-content/10">
        <p className="font-bold text-lg flex items-center justify-center gap-2">
          Made with <FaHeart className="text-red-500 animate-pulse" /> by
          UtshoMH
        </p>
      </div>
    </div>
  );
};

export default About;
