import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReviewPerson from "../assets/nikki-TJP4NANB.png";

const TestimonialSection = () => {
  const testimonials = [
    { name: 'Robert A. Valvas', img: ReviewPerson, rating: 5, storeLink: 'https://store.example.com/robert' },
    { name: 'Cristian Romey', img: ReviewPerson, rating: 5, storeLink: 'https://store.example.com/cristian' },
    { name: 'Nikki', img: ReviewPerson, rating: 5, storeLink: 'https://store.example.com/nikki' },
    { name: 'Robert A. Valvas', img: ReviewPerson, rating: 5 },
    { name: 'Cristian Romey', img: ReviewPerson, rating: 5 },
    { name: 'Nikki', img: ReviewPerson, rating: 5 }
    // Add more testimonials as needed
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#f7f7f7] relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className='flex flex-col justify-center items-center mb-12 sm:mb-16 md:mb-24 space-y-4 sm:space-y-6 text-center'>
        <h2 className="text-2xl sm:text-3xl font-bold">Trusted by over 8M sellers around the world</h2>
        <p className="max-w-2xl">Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.</p>
        </div>

        <div className="relative swiper-container">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active bg-green-500',
            }}
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg mb-12 p-6 sm:p-8 md:p-10">
                  <div className="flex flex-col sm:flex-row mb-4">
                    <img src={`${testimonial.img}`} alt={testimonial.name} className="mb-4 sm:mb-0 sm:mr-4 w-16 h-16 rounded-lg object-cover" />
                    <div className="text-center sm:text-left">
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <a href={testimonial.storeLink} className="text-green-500 hover:text-green-600 transition-colors duration-200 mt-2 inline-block cursor-pointer">
                        Store Link
                      </a>
                      <div className="flex justify-center sm:justify-start">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl sm:text-2xl">★</span>
                        ))}
                      </div>

                    </div>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center items-center mt-8">
            <button className="swiper-button-prev-custom">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="swiper-pagination-custom mx-4"></div>
            <button className="swiper-button-next-custom">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Responsive arrow-like shape */}
    <div className="absolute left-1/2 transform -translate-x-1/2 overflow-visible" style={{ bottom: '-40px' }}>
      <div
        className="w-full sm:w-[500px] md:w-[600px] lg:w-[700px] h-[60px] sm:h-[80px] md:h-[90px] lg:h-[100px] bg-[#f7f7f7]"
        style={{
          clipPath: 'polygon(0 0, 50% 100%, 100% 0)'
        }}
      ></div>
    </div>
    </section>
  );
};

export default TestimonialSection;
