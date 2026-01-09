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
    <div className="py-10 space-y-6 overflow-hidden">
      <h2 className="text-3xl font-bold border-l-4 pl-4 border-accent">
        Reviews
      </h2>
      <Swiper
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        slidesPerView={1.2}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews?.map((review, index) => (
          <SwiperSlide key={index} className="flex h-auto">
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
