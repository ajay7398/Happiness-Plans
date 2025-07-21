import React from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="p-8 max-w-4xl mx-auto">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={  <About />}></Route>
       <Route path="/services" element={  <Services />}></Route>
       <Route path="/contact" element={<Contact />}></Route>
      </Routes>
       </main>
      <Footer />
    </div>
  );
}
