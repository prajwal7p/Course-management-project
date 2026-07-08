
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo / Brand */}
        <div>
          <h2 className="text-xl font-bold text-white">CourseDCL</h2>
          <p className="text-sm text-slate-400">
            Learn. Build. Grow.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">
            Courses
          </a>
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-slate-400">
          © {new Date().getFullYear()} CourseDCL. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
