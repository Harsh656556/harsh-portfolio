import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-gray-50 text-gray-800 overflow-hidden">
        <div className="absolute top-[-10rem] left-[-10rem] w-[400px] h-[400px] bg-orange-300 rounded-full blur-3xl opacity-40"></div>
        <Navbar />
        <div className="pt-24 pb-16 px-6 md:px-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;