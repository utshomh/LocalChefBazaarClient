import {
  FaSearch,
  FaEnvelope,
  FaComments,
  FaQuestionCircle,
} from "react-icons/fa";

const faqs = [
  {
    q: "How do I track my order?",
    a: "Once you place an order, you can view its status in real-time from your Dashboard > My Orders page.",
  },
  {
    q: "Can I become a chef?",
    a: "Yes! Sign up and navigate to the 'Become a Chef' section. After a quick hygiene verification, you can start selling.",
  },
  {
    q: "What payment methods are supported?",
    a: "We support secure card payments and direct cash on delivery for verified users.",
  },
];

const contactOptions = [
  {
    icon: FaComments,
    title: "Live Chat",
    desc: "Available 9am - 10pm",
    action: "Chat Now",
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    desc: "Response within 24h",
    action: "Send Email",
  },
  {
    icon: FaQuestionCircle,
    title: "FAQs",
    desc: "Instant Answers",
    action: "Read More",
  },
];

const Support = () => {
  return (
    <div className="flex-1 w-full bg-base-200 p-6 md:p-12 rounded-box min-h-screen animate-in fade-in zoom-in-95 duration-500 space-y-8">
      {/* Search Header */}
      <div className="bg-primary text-primary-content rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-lg">
        <h1 className="text-3xl md:text-5xl font-black">How can we help?</h1>
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search for help (e.g. 'refund', 'delivery')"
            className="input input-lg w-full rounded-full pl-12 text-base-content shadow-xl focus:scale-105 transition-transform"
          />
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-base-content/50 text-xl" />
        </div>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-10 md:-mt-16 px-4">
        {contactOptions.map((item, i) => (
          <div
            key={i}
            className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center space-y-3 z-10"
          >
            <div className="p-4 bg-base-200 rounded-full text-primary">
              <item.icon size={24} />
            </div>
            <h3 className="font-bold text-xl">{item.title}</h3>
            <p className="text-sm opacity-70">{item.desc}</p>
            <button className="btn btn-sm btn-outline btn-primary rounded-full mt-2">
              {item.action}
            </button>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto space-y-6 pt-8">
        <h2 className="text-3xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="collapse collapse-plus bg-base-100 border border-base-300 rounded-xl hover:bg-base-200 transition-colors"
            >
              <input
                type="radio"
                name="my-accordion-3"
                defaultChecked={i === 0}
              />
              <div className="collapse-title text-lg font-bold">{faq.q}</div>
              <div className="collapse-content opacity-80">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-base-100 p-8 rounded-2xl border border-base-300 mt-8">
        <h3 className="text-2xl font-bold mb-6 border-l-4 border-accent pl-3">
          Send us a message
        </h3>
        <form className="space-y-4" onClick={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
          </div>
          <textarea
            className="textarea textarea-bordered w-full h-32"
            placeholder="Describe your issue..."
          ></textarea>
          <button className="btn btn-primary w-full md:w-auto">
            Submit Ticket
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
