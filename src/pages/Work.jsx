import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  const works = [
    {
      title: "Projects",
      content:
        "• Self-Updating Web Dashboard — Integrated with Checkmk APIs for live alert visualization. • Automated Monitoring Backend — Built using Python & Selenium. • Centralized Logging System (ELK Stack) — For system analytics and debugging.",
    },
    {
      title: "Personal Projects",
      content:
        "• Cloudonmo Business Website — Designed via Wix Studio. • Personal Portfolio — Built with React, Bootstrap, and Netlify.",
    },
    {
      title: "Freelance",
      content:
        "Built interactive business websites using Wix Studio and React, improving visual engagement and client retention.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      {works.map((work, i) => (
        <motion.div
          key={i}
          className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold mb-2 text-orange-600">
            {work.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{work.content}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default Work;