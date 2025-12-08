import Lottie from "lottie-react";
import { useForm } from "react-hook-form";

import cookingAnimation from "../assets/animations/cooking.json";
import { uploadImage } from "../services/imgbb";
import alert from "../utils/alert";
import useAxios from "../hooks/useAxios";
import useUser from "../hooks/useUser";
import Loader from "../ui/shared/Loader";

const NewMealPage = () => {
  const axios = useAxios();
  const { user, error, isError, isLoading } = useUser();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleMealCreation = async (data) => {
    const ingredients = data.ingredients.split(",").map((i) => i.trim());
    const { name, price, estimatedDeliveryTime } = data;

    try {
      const image = await uploadImage(data.image[0]);

      const meal = {
        name,
        image,
        price,
        estimatedDeliveryTime,
        ingredients,
        chef: user._id,
      };

      await axios.post("/meals", meal);
      alert.success("Created!", "Meal created successfully!");
      reset();
    } catch (error) {
      alert.error(
        "Oops!",
        error.message || "Something went wrong! Please try again."
      );
    }
  };

  if (isLoading) return <Loader />;

  if (isError) throw new Error(error.message);

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-center">Create New Meal</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        <form onSubmit={handleSubmit(handleMealCreation)} className="space-y-4">
          {/* Name */}
          <div className="space-y-1">
            <label className="text-base font-semibold">Name:</label>
            <input
              {...register("name", {
                required: "Meal Name is required",
              })}
              type="text"
              className="input w-full"
              placeholder="Meal Name"
            />
            {errors.name && (
              <p className="text-error text-xs font-semibold">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Image */}
          <div className="space-y-1">
            <label className="text-base font-semibold">Image:</label>
            <input
              {...register("image", { required: "Meal Image Required" })}
              type="file"
              accept="image/*"
              className="file-input w-full"
            />
            {errors.image && (
              <p className="text-error text-xs font-semibold">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Meal Ingredients */}
          <div className="space-y-1">
            <label className="text-base font-semibold">Ingredients:</label>
            <input
              {...register("ingredients", {
                required: "Meal Ingredients is required",
              })}
              type="text"
              className="input w-full"
              placeholder="Meal Ingredients"
            />
            {errors.ingredients && (
              <p className="text-error text-xs font-semibold">
                {errors.ingredients.message}
              </p>
            )}
          </div>

          {/* Price */}
          <div className="space-y-1">
            <label className="text-base font-semibold">Price:</label>
            <input
              {...register("price", {
                required: "Price is required",
              })}
              type="number"
              className="input w-full"
              placeholder="Price"
            />
            {errors.price && (
              <p className="text-error text-xs font-semibold">
                {errors.price.message}
              </p>
            )}
          </div>

          {/* Estimated Delivery Time */}
          <div className="space-y-1">
            <label className="text-base font-semibold">
              Estimated Delivery Time:
            </label>
            <input
              {...register("estimatedDeliveryTime", {
                required: "Estimated Delivery Time is required",
              })}
              type="number"
              className="input w-full"
              placeholder="Estimated Delivery Time"
            />
            {errors.estimatedDeliveryTime && (
              <p className="text-error text-xs font-semibold">
                {errors.estimatedDeliveryTime.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className={`btn gap-2 w-full ${
              isSubmitting ? "cursor-not-allowed" : "btn-primary"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Crating Meal..." : "Create Meal"}
            {isSubmitting && (
              <span className="loading loading-xs loading-bars" />
            )}
          </button>
        </form>

        <Lottie
          animationData={cookingAnimation}
          loop={true}
          className="w-full hidden md:block"
        />
      </div>
    </div>
  );
};

export default NewMealPage;
