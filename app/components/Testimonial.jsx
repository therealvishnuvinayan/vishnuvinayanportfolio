"use client";

import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required Swiper modules
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCube,
  Keyboard,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import Title from "./Title";
import { testimonialData } from "../data";

const Testimonials = () => {
  return (
    <section id="testimonial" className="lg:py-20 py-12">
      <div className="container">
        {/* TITLE START */}
        <Title
          subTitle="Our Clients Speak"
          title="What My Clients Have to Say"
        />
        {/* TITLE END */}

        <Swiper
          // centeredSlides={true}
          // Default parameters
          slidesPerView={1}
          spaceBetween={10}
          // Responsive breakpoints
          breakpoints={{
            // when window width is >= 320px
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          loop={true}
          autoplay={{
            delay: 5000,
          }}
          speed={800}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          modules={[Navigation, Pagination, Autoplay, EffectCube, Keyboard]}
          className="mySwiper relative"
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index} className="my-5 mb-12">
              <div className="bg-gray-50 dark:bg-dark rounded-md shadow-md">
                <div className="max-w-screen-xl px-4 py-6 mx-auto text-center lg:py-10 lg:px-6">
                  <figure className="max-w-screen-md mx-auto">
                    <svg
                      className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                    <blockquote>
                      <p className="md:text-2xl text-xl font-medium text-gray-900 dark:text-white">
                        {`"${testimonial?.text}"`}
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      <Image
                        src={testimonial?.image}
                        alt={testimonial?.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <h4 className="pr-3 font-medium text-primary">
                          {testimonial?.name}
                        </h4>
                        <h5 className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                          {testimonial?.position}
                        </h5>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
