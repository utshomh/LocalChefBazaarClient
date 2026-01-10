import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaSortAmountDown, FaUtensils } from "react-icons/fa";

import useAxios from "../../hooks/useAxios";
import MealCard from "../../ui/meal/MealCard";
import Loader from "../../ui/shared/Loader";

const MealsPage = () => {
  const axios = useAxios();
  const [sort, setSort] = useState("asc");

  const {
    data: meals,
    error,
    isError,
    isFetching, // Added to show interaction during sort
    isLoading,
  } = useQuery({
    queryKey: ["get-all-meals", sort],
    queryFn: () =>
      axios.get(`/meals?sort=price&order=${sort}`).then((res) => res.data),
  });

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  if (isLoading) return <Loader />;
  if (isError) throw new Error(error.message);

  return (
    <div className="flex-1 w-full space-y-8 bg-base-200 p-4 md:p-8 rounded-box min-h-screen">
      {/* Header Section with Decorative Glow */}
      <div className="relative overflow-hidden bg-base-100 rounded-3xl p-8 text-center space-y-3 shadow-sm border border-base-300">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-accent/10 blur-3xl rounded-full"></div>

        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          Explore Our <span className="text-primary">Menu</span>
        </h2>
        <p className="text-base text-base-content/60 max-w-xl mx-auto leading-relaxed">
          Discover a world of homemade flavors. Every meal is a story told by
          our talented local chefs.
        </p>

        {/* Animated Badge for Meal Count */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-base-200 rounded-full border border-base-300 text-sm font-bold shadow-inner">
          <FaUtensils className="text-primary animate-bounce" size={12} />
          <span>
            Showing {meals.length}{" "}
            {meals.length === 1 ? "Delicious Meal" : "Fresh Meals"}
          </span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-base-100 p-4 rounded-2xl shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <FaSortAmountDown size={20} />
          </div>
          <label className="text-lg font-bold tracking-tight">
            Sort by Price
          </label>
        </div>

        <select
          className="select select-bordered select-primary w-full sm:w-64 rounded-xl font-semibold focus:ring-2 focus:ring-primary/20 transition-all"
          value={sort}
          onChange={handleSortChange}
        >
          <option value="asc">Low to High (Budget Friendly)</option>
          <option value="desc">High to Low (Premium Choice)</option>
        </select>
      </div>

      {/* Main Content Area */}
      <div
        className={`transition-opacity duration-300 ${
          isFetching ? "opacity-50 pointer-events-none" : "opacity-100"
        }`}
      >
        {meals.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4 bg-base-100 rounded-3xl border-2 border-dashed border-base-300">
            <div className="p-6 bg-base-200 rounded-full text-base-content/20">
              <FaUtensils size={60} />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">Kitchen is Quiet...</h3>
              <p className="text-base-content/60">
                No meals found in this category. Check back later!
              </p>
            </div>
          </div>
        ) : (
          /* Grid with a slight staggered entry feel if you use a library, 
             otherwise just standard clean gaps */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {meals.map((meal) => (
              <MealCard key={meal._id} meal={meal} />
            ))}
          </div>
        )}
      </div>

      {/* Floating Refresh Indicator (Only shows when background fetching) */}
      {isFetching && !isLoading && (
        <div className="fixed bottom-10 right-10 z-50">
          <div className="flex items-center gap-3 bg-primary text-primary-content px-6 py-3 rounded-full shadow-2xl animate-bounce">
            <span className="loading loading-spinner loading-sm"></span>
            <span className="font-bold">Updating Menu...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealsPage;
