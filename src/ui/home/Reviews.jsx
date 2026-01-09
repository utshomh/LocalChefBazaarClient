import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import useAxios from "../../hooks/useAxios";
import Loader from "../shared/Loader";
import ReviewCard from "../review/ReviewCard";

const Reviews = () => {
  const axios = useAxios();
  const {
    data: reviews,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["get-reviews"],
    queryFn: () => axios.get("/reviews?limit=6").then((res) => res.data),
  });

  if (isLoading) return <Loader />;
  if (isError) throw new Error(error.message);

  return (
    <div className="py-10 space-y-6">
      <h2 className="text-3xl font-bold border-l-4 pl-4 border-accent">
        Reviews
      </h2>

      <Swiper
        spaceBetween={20}
        loop={true}
        centeredSlides={true} // Centers the active card
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        // Default (Mobile)
        slidesPerView={1.2}
        breakpoints={{
          // Tablet
          640: {
            slidesPerView: 2,
            centeredSlides: false, // Usually looks better left-aligned on tablet
          },
          // Desktop
          1024: {
            slidesPerView: 3,
            centeredSlides: false,
          },
        }}
        className="pb-12"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
