import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-3 text-gray-900">Welcome!</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          I’m <strong>Harsh Vardhan</strong>, a passionate Full-Stack Developer
          with experience in web automation, backend services, and monitoring
          systems. I love building scalable, efficient, and elegant solutions.
        </p>
      </motion.div>

      <motion.div
        className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="text-xl font-semibold mb-2 text-orange-600">Objective</h3>
        <p className="text-gray-700 leading-relaxed">
          To secure a position as a Full-Stack Developer where I can apply my
          skills in web development, gain further experience, and contribute to
          the productivity and growth of the company.
        </p>
      </motion.div>
    </section>
  );
};

export default Home;