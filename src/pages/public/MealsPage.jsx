import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  FaSortAmountDown,
  FaUtensils,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import useAxios from "../../hooks/useAxios";
import MealCard from "../../ui/meal/MealCard";
import Loader from "../../ui/shared/Loader";

const MealsPage = () => {
  const axios = useAxios();

  const [sortField, setSortField] = useState("price");
  const [sortOrder, setSortOrder] = useState("asc");

  const [sliderPrice, setSliderPrice] = useState(1000);
  const [sliderDeliveryTime, setSliderDeliveryTime] = useState(60);

  const [maxPrice, setMaxPrice] = useState(1000);
  const [maxDeliveryTime, setMaxDeliveryTime] = useState(60);

  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [page, setPage] = useState(1);
  const limit = 6;

  const resetPage = () => setPage(1);

  const {
    data: meals = [],
    error,
    isError,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: [
      "get-all-meals",
      sortField,
      sortOrder,
      maxPrice,
      maxDeliveryTime,
      searchTerm,
      page,
    ],
    queryFn: () =>
      axios
        .get("/meals", {
          params: {
            sort: sortField,
            order: sortOrder,
            maxPrice,
            maxDeliveryTime,
            search: searchTerm,
            page,
            limit,
          },
        })
        .then((res) => res.data),
    keepPreviousData: true,
  });

  if (isLoading) return <Loader />;
  if (isError) throw new Error(error.message);

  return (
    <div className="flex-1 w-full space-y-8 bg-base-200 p-4 md:p-8 rounded-box min-h-screen">
      <div className="relative overflow-hidden bg-base-100 rounded-3xl p-8 text-center space-y-3 shadow-sm border border-base-300">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-accent/10 blur-3xl rounded-full" />

        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          Explore Our <span className="text-primary">Menu</span>
        </h2>
        <p className="text-base text-base-content/60 max-w-xl mx-auto">
          Discover a world of homemade flavors. Every meal is a story told by
          our talented local chefs.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-base-200 rounded-full border border-base-300 text-sm font-bold shadow-inner">
          <FaUtensils className="text-primary animate-bounce" size={12} />
          <span>
            Page {page} — Showing {meals.length} Meals
          </span>
        </div>
      </div>

      <div className="bg-base-100 p-5 rounded-2xl shadow-sm space-y-4">
        {/* Search */}
        <div className="flex items-center gap-3">
          <FaSearch className="text-primary" />
          <input
            type="text"
            placeholder="Search meals or ingredients..."
            className="input input-bordered w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              setSearchTerm(search);
              resetPage();
            }}
          >
            Search
          </button>
        </div>

        {/* Sort & Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <select
            className="select select-bordered"
            value={sortField}
            onChange={(e) => {
              setSortField(e.target.value);
              resetPage();
            }}
          >
            <option value="price">Price</option>
            <option value="avgRating">Rating</option>
          </select>

          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value);
              resetPage();
            }}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>

          {/* Price Slider */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Max Price: {sliderPrice}৳
            </label>
            <input
              type="range"
              min={0}
              max={2000}
              step={10}
              value={sliderPrice}
              onChange={(e) => setSliderPrice(Number(e.target.value))}
              onMouseUp={() => {
                setMaxPrice(sliderPrice);
                resetPage();
              }}
              onTouchEnd={() => {
                setMaxPrice(sliderPrice);
                resetPage();
              }}
              className="range range-xs range-primary w-full"
            />
          </div>

          {/* Delivery Time Slider */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Max Delivery Time: {sliderDeliveryTime} min
            </label>
            <input
              type="range"
              min={10}
              max={120}
              step={5}
              value={sliderDeliveryTime}
              onChange={(e) => setSliderDeliveryTime(Number(e.target.value))}
              onMouseUp={() => {
                setMaxDeliveryTime(sliderDeliveryTime);
                resetPage();
              }}
              onTouchEnd={() => {
                setMaxDeliveryTime(sliderDeliveryTime);
                resetPage();
              }}
              className="range range-xs range-primary w-full"
            />
          </div>
        </div>
      </div>

      <div
        className={`transition-opacity duration-300 ${
          isFetching ? "opacity-50 pointer-events-none" : "opacity-100"
        }`}
      >
        {meals.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4 bg-base-100 rounded-3xl border-2 border-dashed border-base-300">
            <FaUtensils size={60} className="opacity-20" />
            <h3 className="text-2xl font-bold">No Meals Found</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {meals.map((meal) => (
              <MealCard key={meal._id} meal={meal} />
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center items-center gap-4 pt-6">
        <button
          className="btn btn-outline"
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          <FaChevronLeft /> Prev
        </button>

        <span className="font-bold text-lg">Page {page}</span>

        <button
          className="btn btn-outline"
          disabled={meals.length < limit}
          onClick={() => setPage((p) => p + 1)}
        >
          Next <FaChevronRight />
        </button>
      </div>

      {isFetching && !isLoading && (
        <div className="fixed bottom-10 right-10 z-50">
          <div className="flex items-center gap-3 bg-primary text-primary-content px-6 py-3 rounded-full shadow-2xl animate-bounce">
            <span className="loading loading-spinner loading-sm" />
            <span className="font-bold">Loading Page {page}...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealsPage;
