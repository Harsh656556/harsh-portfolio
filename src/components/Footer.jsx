import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-6 text-gray-500 text-sm border-t mt-16">
      <button
        onClick={() => (window.location = 'mailto:harshvar2077@gmail.com')}
        className="px-5 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition font-medium mb-3"
      >
        Contact Me
      </button>
      <p>© 2025 Harsh Vardhan — Portfolio built with React & Tailwind.</p>
    </footer>
  );
};

export default Footer;