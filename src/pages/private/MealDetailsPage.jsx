import {
  FaClock,
  FaListUl,
  FaStar,
  FaUser,
  FaCalendarAlt,
  FaHeart,
} from "react-icons/fa";
import { TbCoinTakaFilled } from "react-icons/tb";
import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import alert from "../../utils/alert";
import useAxios from "../../hooks/useAxios";
import useUser from "../../hooks/useUser";
import Loader from "../../ui/shared/Loader";
import MealReviews from "../../ui/review/MealReviews";
import AddReviewForm from "../../ui/review/AddReview";

const MealDetailsPage = () => {
  const { id } = useParams();
  const { user, isLoading: userIsLoading } = useUser();
  const axios = useAxios();

  const { data, error, refetch, isError, isLoading } = useQuery({
    queryKey: ["get-meal", id],
    queryFn: async () => {
      const meal = await axios.get(`/meals/${id}`).then((res) => res.data);
      const favorite = await axios
        .get(`/favorites?meal=${meal._id}&user=${user._id}`)
        .then((res) => res.data);
      const isFavorite = favorite.length > 0;
      return [meal, isFavorite];
    },
  });

  const handleAddToFavorite = async (meal) => {
    await alert.confirm(
      "Are you sure?",
      `You are about to mark "${meal.name}" as a Favorite Meal!`,
      async () => {
        try {
          await axios.post(`/favorites`, { user: user._id, meal: meal._id });
          alert.success(
            "Marked as Favorite!",
            "Meal has been marked as Active."
          );
          await refetch();
        } catch (error) {
          alert.error("Oops!", error.message || "Something went wrong!");
        }
      }
    );
  };

  if (isLoading || userIsLoading) return <Loader />;
  if (isError) throw new Error(error.message);

  const [meal, isFavorite] = data;

  return (
    <div className="flex-1 w-full p-6 bg-base-200 rounded-box space-y-8 shadow-sm">
      {/* Page Title with Accent Line */}
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">
          {meal.name}
        </h1>
        <div className="h-1.5 w-24 bg-accent rounded-full animate-pulse"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Media & Actions */}
        <div className="space-y-6">
          <div className="group relative overflow-hidden rounded-box shadow-xl bg-base-300">
            <img
              src={meal.image}
              alt={meal.name}
              className="w-full aspect-square object-cover transition-transform duration-[2000ms] group-hover:scale-110"
            />
            {/* Price Overlay for Mobile */}
            <div className="absolute top-4 right-4 md:hidden bg-primary text-primary-content px-4 py-2 rounded-full font-bold shadow-lg">
              {meal.price}৳
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              className={`btn btn-lg flex-1 w-full sm:w-auto transition-all duration-300 gap-2 ${
                isFavorite
                  ? "btn-disabled opacity-50"
                  : "btn-outline btn-primary hover:scale-105 active:scale-95"
              }`}
              onClick={() => !isFavorite && handleAddToFavorite(meal)}
            >
              <FaHeart className={isFavorite ? "text-error" : "text-current"} />
              {isFavorite ? "Saved to Favorites" : "Add to Favorite"}
            </button>

            <Link
              to={`/order/${id}`}
              className="btn btn-primary btn-lg flex-1 w-full sm:w-auto shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
            >
              Order Now
            </Link>
          </div>
        </div>

        {/* Right Column: Information Cards */}
        <div className="grid grid-cols-1 gap-6">
          {/* Info Card Component for cleaner reuse */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Price Section */}
            <div className="p-4 bg-base-100 rounded-2xl border-l-4 border-primary hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-primary mb-1">
                <TbCoinTakaFilled size={20} />
                <span className="font-bold uppercase text-xs tracking-widest">
                  Price
                </span>
              </div>
              <span className="text-3xl font-black">{meal.price}৳</span>
            </div>

            {/* Rating Section */}
            <div className="p-4 bg-base-100 rounded-2xl border-l-4 border-warning hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-warning mb-1">
                <FaStar size={18} />
                <span className="font-bold uppercase text-xs tracking-widest">
                  Rating
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black">{meal.avgRating}</span>
                <span className="text-sm opacity-60">
                  ({meal.totalReviews} reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Chef Section */}
          <div className="p-5 bg-base-100 rounded-2xl border-l-4 border-accent group hover:shadow-md transition-all">
            <div className="flex items-center gap-2 text-accent mb-3">
              <FaUser size={18} />
              <span className="font-bold uppercase text-xs tracking-widest">
                Meet the Chef
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-14 h-14 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2 transition-transform group-hover:scale-110">
                  <img
                    src={meal.chef.photoURL}
                    className="object-cover"
                    alt="Chef"
                  />
                </div>
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">
                  {meal.chef.displayName}
                </p>
                <p className="text-sm opacity-60 truncate max-w-[200px]">
                  {meal.chef.email}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Delivery Time */}
            <div className="flex items-start gap-4 p-2">
              <div className="p-3 bg-base-300 rounded-xl text-primary">
                <FaClock size={20} />
              </div>
              <div>
                <p className="text-xs font-bold opacity-50 uppercase">
                  Est. Delivery
                </p>
                <p className="font-semibold text-lg">
                  {meal.estimatedDeliveryTime} mins
                </p>
              </div>
            </div>

            {/* Added Date */}
            <div className="flex items-start gap-4 p-2">
              <div className="p-3 bg-base-300 rounded-xl text-primary">
                <FaCalendarAlt size={20} />
              </div>
              <div>
                <p className="text-xs font-bold opacity-50 uppercase">
                  Posted On
                </p>
                <p className="font-semibold text-lg">
                  {new Date(meal.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Ingredients List */}
          <div className="p-6 bg-base-300 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <FaListUl size={80} />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <FaListUl className="text-primary" />
              <h3 className="font-bold text-lg uppercase tracking-tight">
                Ingredients
              </h3>
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {meal.ingredients.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-8 space-y-12">
        <div className="divider">Reviews & Feedback</div>
        <MealReviews meal={id} />
        <div className="divider">Leave a Review</div>
        <AddReviewForm meal={id} />
      </div>
    </div>
  );
};

export default MealDetailsPage;
