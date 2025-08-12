import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Introduction = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 px-6 md:px-20"
    >
      {/* Left Side: Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Hi, I'm <span className="text-teal-500">Shah Muhammad Rubayet Alam</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mt-2">
          Full Stack Developer
        </h2>
        <p className="mt-4 text-gray-600 max-w-lg">
          I design and develop modern, responsive, and high-performance web
          applications with a focus on user experience and clean code.
        </p>

        {/* Resume Button */}
        <div className="mt-6">
          <a
            href="/resume.pdf"
            download
            className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-600 transition duration-300"
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
            className="text-gray-700 hover:text-teal-500 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/smrubayetalam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-teal-500 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/rubayetalam21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-teal-500 text-2xl"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Right Side: Photo */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <img
          src="/DSC_4632.JPG"
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-teal-500"
        />
      </div>
    </section>
  );
};

export default Introduction;
