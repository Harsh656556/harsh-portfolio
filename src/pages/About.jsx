import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const cards = [
    {
      title: "Experience",
      content:
        "Associate Software Developer — Vitaledge Technologies. Developed backend services, REST APIs, and automation scripts. Intern — Built self-updating dashboards for alert monitoring using Checkmk APIs.",
    },
    {
      title: "Education",
      content:
        "Bachelor in Computer Science — Savitribai Phule Pune University (8.69 CGPA). High School (ISC) — 80%. Senior Secondary (ICSE) — 90%.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold mb-2 text-orange-600">
            {card.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{card.content}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default About;