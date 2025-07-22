import React from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import features from "../data/features";
import Testimonials from "../components/Testimonials";
const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
    
     <section className="relative bg-cover bg-center text-white py-20 px-6 text-center">
  
  <div className="absolute inset-0 bg-black opacity-50"></div>

  
  <div className="relative z-10">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow">
      Happiness Plans - Make Every Moment a Celebration
    </h1>
    <p className="text-lg md:text-xl mb-6 drop-shadow">
      Travel & event experts—curating bespoke vacations, weddings, and retreats.
    </p>
    <div className="md:space-x-4 space-y-4">
      <button className="bg-white text-teal-700 px-6 py-2 rounded shadow hover:bg-gray-100 font-semibold">
        <Link to="/services">Explore Services</Link>
      </button>
      <button className="bg-teal-600 px-6 py-2 rounded shadow hover:bg-teal-700 font-semibold">
        Get a Quote
      </button>
    </div>
  </div>
</section>


      {/* About Snapshot */}
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">About Happiness Plans</h2>
        <p className="text-gray-700 text-lg">
          Since 2021, <strong>Happiness Plans</strong> has been crafting seamless travel experiences and unforgettable events. Based in Indore, we specialize in holiday packages, air ticketing, destination weddings, corporate events, visa services, and adventure travel.
        </p>
      </section>

      
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          { features.map(([title, desc]) => (
              <div
                key={title}
                className="p-6 border rounded shadow hover:shadow-md transition"
              >
                <h3 className="font-semibold text-xl mb-2 text-teal-600">
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials/>

      <Form/>

      
      <section className="bg-gray-100 py-8 text-center my-5">
        <p className="text-gray-600">
          🎉 Proudly appreciated by brands like <strong>Yas Island Abu Dhabi</strong>
        </p>
      </section>
    </div>
  );
};

export default Home;
