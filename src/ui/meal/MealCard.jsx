import { Link } from "react-router";
import { FaClock, FaStar, FaUser } from "react-icons/fa";
import { TbCoinTakaFilled } from "react-icons/tb";

const MealCard = ({ meal }) => {
  return (
    <div
      className="group relative w-full bg-base-300 rounded-box overflow-hidden 
                    hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-out 
                    border border-transparent hover:border-primary/20"
    >
      {/* Image Section - Consistent Square Aspect Ratio */}
      <div className="relative w-full aspect-square overflow-hidden bg-base-200">
        <img
          src={meal.image}
          alt={meal.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Floating Price Tag */}
        <div className="absolute top-3 right-3 bg-base-100/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-lg z-10">
          <TbCoinTakaFilled className="text-primary" />
          <span className="font-bold text-lg">{meal.price}৳</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold truncate group-hover:text-primary transition-colors">
            {meal.name}
          </h1>
          {/* Animated accent line */}
          <div className="h-1 w-8 bg-accent rounded-full group-hover:w-full transition-all duration-500 ease-in-out"></div>
        </div>

        {/* Info Grid */}
        <div className="space-y-3 text-sm">
          {/* Chef */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <FaUser size={14} />
            </div>
            <div>
              <p className="font-medium">{meal.chef.displayName}</p>
              <p className="text-xs opacity-50">
                Chef ID: {meal.chef._id.slice(-4)}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-base-content/10">
            {/* Time */}
            <div className="flex items-center gap-2">
              <FaClock className="text-primary" />
              <span>{meal.estimatedDeliveryTime} min</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              <span className="font-bold">{meal.avgRating}</span>
              <span className="text-xs opacity-60">({meal.totalReviews})</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            to={`/meals/${meal._id}`}
            className="btn btn-primary btn-block group-hover:scale-105 transition-transform"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
