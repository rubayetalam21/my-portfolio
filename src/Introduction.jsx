import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Introduction = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 px-6 md:px-20 py-16"
    >
      {/* Left Side: Text Card */}
      <div className="flex-1 bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-3xl p-10 shadow-xl border-1 border-teal-500 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-400">
          Hi, I'm <span className="text-cyan-300">Shah Muhammad Rubayet Alam</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-200 mt-2 font-medium">
          Full Stack Developer
        </h2>
        <p className="mt-4 text-gray-300 max-w-lg">
          I design and develop modern, responsive, and high-performance web
          applications with a focus on <span className="text-teal-300 font-semibold">user experience</span> and <span className="text-cyan-300 font-semibold">clean code</span>.
        </p>

        {/* Resume Button */}
        <div className="mt-6">
          <a
            href="/resume.pdf"
            download
            className="bg-gradient-to-r from-teal-500 to-cyan-400 text-white px-6 py-3 rounded-xl shadow-lg hover:from-teal-600 hover:to-cyan-500 transition duration-300"
          >
            📄 Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <a
            href="https://github.com/rubayetalam21/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-teal-400 text-2xl transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/smrubayetalam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-teal-400 text-2xl transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/rubayetalam21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-teal-400 text-2xl transition-colors"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Right Side: Profile Photo */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <img
          src="/DSC_4632.JPG"
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 rounded-3xl object-cover shadow-2xl border-1 border-gradient-to-tr border-teal-500"
        />
      </div>
    </section>
  );
};

export default Introduction;
