import React from "react";
import programs from '../data/programs';
import { Link } from "react-router-dom";
const About = () => (
  <section className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-teal-600 mb-6">
        We Make Every Moment a Celebration
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        Since 2021, based in Indore, <strong>Happiness Plans</strong> has been your one-stop partner for seamless travel and bespoke event planning. We deliver personalized experiences across holidays, weddings, corporate events, visa support, adventure tours, and study-abroad programs.
      </p>

      <div className="grid sm:grid-cols-2 gap-8 mb-8">
        {
          programs.map((item, idx) => (
            <p key={idx} className="text-gray-600">
              {item}
            </p>
          ))
        }
      </div>

      <p className="italic text-gray-500 mb-8">
        🏆 Recognized by <strong>Yas Island Abu Dhabi</strong> for our exceptional event partnerships
      </p>

      <button className="bg-teal-600 text-white px-6 py-3 rounded shadow hover:bg-teal-700 transition">
        <Link to="/contact">Get in Touch</Link>
      </button>
    </div>
  </section>
);

export default About;
