import {
  FaShieldAlt,
  FaUserCheck,
  FaGavel,
  FaFileContract,
} from "react-icons/fa";

const Terms = () => {
  const sections = [
    {
      icon: FaUserCheck,
      title: "1. User Accounts",
      content:
        "To use LocalChefBazaar, you must register for an account. Users can register as Customers or apply to become Chefs. You are responsible for maintaining the confidentiality of your account credentials.",
    },
    {
      icon: FaShieldAlt,
      title: "2. Food Safety & Hygiene",
      content:
        "All Chefs on the platform must adhere to strict hygiene standards. LocalChefBazaar reserves the right to suspend any Chef account that receives multiple safety complaints.",
    },
    {
      icon: FaFileContract,
      title: "3. Orders & Payments",
      content:
        "Payments are processed securely via our payment partners. Orders can be cancelled up to 30 minutes before the scheduled preparation time for a full refund.",
    },
    {
      icon: FaGavel,
      title: "4. Code of Conduct",
      content:
        "Users agree to treat Chefs and delivery personnel with respect. Harassment or abusive behavior will result in an immediate permanent ban from the platform.",
    },
  ];

  return (
    <div className="flex-1 w-full bg-base-200 p-6 md:p-12 rounded-box min-h-screen animate-in fade-in zoom-in-95 duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-12 border-b-2 border-base-300 pb-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-black mb-2">
            Terms of Service
          </h1>
          <p className="opacity-70 text-lg">
            Please read these terms carefully before using our platform.
          </p>
        </div>
        <div className="badge badge-lg badge-neutral p-4 font-mono">
          Last Updated: Jan 2026
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Content Column */}
        <div className="lg:col-span-2 space-y-6">
          {sections.map((section, i) => (
            <div
              key={i}
              className="group bg-base-100 p-8 rounded-2xl border border-base-300 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-base-200 rounded-lg text-primary group-hover:scale-110 transition-transform">
                  <section.icon size={24} />
                </div>
                <h2 className="text-2xl font-bold">{section.title}</h2>
              </div>
              <p className="text-base-content/80 leading-relaxed text-lg">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Sidebar / Quick Actions */}
        <div className="space-y-6">
          <div className="bg-primary text-primary-content p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Did you know?</h3>
            <p className="opacity-90">
              By using our service, you agree to support local home cooks and
              maintain a friendly community environment.
            </p>
          </div>

          <div className="bg-base-100 p-6 rounded-2xl border border-base-300 space-y-4">
            <h3 className="font-bold text-lg">Need Clarification?</h3>
            <p className="text-sm opacity-70">
              If you have questions about our terms, our legal team is here to
              help.
            </p>
            <button className="btn btn-outline w-full">
              Contact Legal Team
            </button>
          </div>

          {/* Agreement Button */}
          <button className="btn btn-accent btn-lg w-full shadow-xl hover:scale-105 transition-transform">
            I Agree to Terms
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
