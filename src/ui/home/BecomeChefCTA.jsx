import { useNavigate } from "react-router";

const BecomeChefCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-primary text-primary-content rounded-box p-8 md:p-12 text-center space-y-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-4xl font-black">Turn Your Kitchen Into Income</h2>
      <p className="max-w-2xl mx-auto text-lg opacity-90">
        Join LocalChefBazaar and start earning by cooking meals you love for
        people in your community.
      </p>
      <button
        onClick={() => navigate("/register", { state: { role: "chef" } })}
        className="btn btn-accent btn-lg rounded-box hover:scale-105 active:scale-95 transition-transform duration-200"
      >
        Become a Chef
      </button>
    </section>
  );
};

export default BecomeChefCTA;
