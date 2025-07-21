import React from "react";
import services from "../data/services";


const Services = () => (
  <section className="py-12 bg-gray-50">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => 
          <div key={s.title} className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-teal-600 mb-2">{s.title}</h3>
            <p className="text-gray-700">{s.desc}</p>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default Services;
