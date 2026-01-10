import { Link } from "react-router";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { reviewer, rating, comment, meal, createdAt } = review;

  return (
    <div
      className="group relative bg-base-200 rounded-box p-6 w-full max-w-md space-y-5 shadow-sm 
                    border border-transparent hover:border-primary/20 hover:scale-95 hover:shadow-2xl 
                    transition-all duration-500 ease-out overflow-hidden"
    >
      {/* Header: Reviewer Info */}
      <div className="flex items-center gap-4 relative z-10">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full ring ring-transparent group-hover:ring-primary/50 ring-offset-base-100 ring-offset-2 transition-all duration-500">
            <img
              src={reviewer.photoURL}
              alt={reviewer.displayName}
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
            {reviewer.displayName}
          </h2>
          <p className="text-xs text-base-content/50 mt-0.5">
            {new Date(createdAt).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Rating Stars - Slight bounce on hover */}
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`w-4 transition-transform duration-300 ${
              i < rating
                ? "text-yellow-400 group-hover:scale-110"
                : "text-base-content/20"
            }`}
            style={{ transitionDelay: `${i * 50}ms` }} // Staggered star animation
          />
        ))}
        <span className="ml-2 font-bold text-sm text-base-content/80">
          {rating}.0
        </span>
      </div>

      {/* Comment Bubble */}
      <div
        className="relative bg-base-100 p-5 rounded-2xl text-center text-base-content/80 italic 
                      group-hover:bg-primary/5 group-hover:text-base-content transition-all duration-300"
      >
        <FaQuoteLeft className="absolute top-3 left-3 text-primary/20 text-lg" />
        <p className="px-2 line-clamp-3 leading-relaxed">"{comment}"</p>
        <FaQuoteRight className="absolute bottom-3 right-3 text-primary/20 text-lg" />
      </div>

      {/* Footer: Meal Reference */}
      <div className="flex items-center gap-4 pt-4 border-t border-base-content/10 relative z-10">
        <div className="hidden sm:block w-14 h-14 shrink-0 rounded-box overflow-hidden bg-base-100">
          <img
            src={meal.image}
            alt={meal.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="min-w-0 flex-1 space-y-1">
          <Link
            to={`/meals/${meal._id}`}
            className="block font-bold text-base truncate hover:text-primary transition-colors"
          >
            {meal.name}
          </Link>

          <div className="flex flex-wrap items-center gap-x-3 text-xs text-base-content/60">
            <span className="font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
              {meal.price}৳
            </span>
            <span className="truncate">
              by {meal.chef.displayName || "Chef"}
            </span>
          </div>
        </div>
      </div>

      {/* Subtle Background Glow Blob */}
      <div
        className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 blur-3xl rounded-full 
                      group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none"
      ></div>
    </div>
  );
};

export default ReviewCard;
