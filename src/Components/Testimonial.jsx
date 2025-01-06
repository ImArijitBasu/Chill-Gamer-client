import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-smoky.vercel.app/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
  return (
    <section className="my-20">
<div className="">
    <h1 className="font-bold text-4xl text-center uppercase text-blue-900 dark:text-white border-b-2 py-3 border-blue-500">Testimonials</h1>
</div>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {
            reviews.map(review => <SwiperSlide
                key={review._id}
            >
                <div className="flex flex-col items-center mx-10 md:mx-24 my-16">
                    
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                    />
                    <p className="py-8 text-justify max-h-40 overflow-y-auto text-xs md:text-base">{review.details}</p>
                    <h3 className="text-2xl text-blue-400">{review.name}</h3>
                </div>
            </SwiperSlide>)
        }
    </Swiper>
</section>
  );
};

export default Testimonial;
