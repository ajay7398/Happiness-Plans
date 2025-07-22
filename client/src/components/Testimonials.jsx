import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import testimonials from "../data/testimonials";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-10">
          What Our Clients Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 bg-white rounded shadow-md">
              <FaQuoteLeft className="text-teal-500 text-3xl mb-4" />
              <p className="text-gray-700 mb-4 italic">"{t.feedback}"</p>
              <h4 className="font-semibold text-gray-900">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
