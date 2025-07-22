import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDialpad } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Form from "../components/Form";
const Contact = () => (
  <section id="contact" className="py-16 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">Get in Touch with Us</h2>
      <p className="text-gray-700 mb-8">
        We’d love to plan your next event or adventure! Contact us or send a message below.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-x-8 mb-12">
        <div className="flex items-center space-x-2">
          <span className="text-teal-600 text-2xl"><FaPhoneAlt /></span>
          <span className="text-gray-700">+91 91091 35533 / 91091 35530</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-teal-600 text-2xl"><MdDialpad /></span>
          <span className="text-gray-700">+91 82248 03424</span>
        </div>
        <div className="flex items-start space-x-2">
          <span className="text-teal-600 text-2xl"><FaLocationDot /></span>
          <span className="text-gray-700">
            408 Apollo Premiere, Vijay Nagar, Indore, MP 452011
          </span>
        </div>
      </div>
<Form/>
     
      <p className="italic text-gray-500 mt-8">
        Usually responds within 24 hours
      </p>
    </div>
  </section>
);

export default Contact;
