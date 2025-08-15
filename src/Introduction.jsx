import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

// Animated Text Component
const AnimatedText = ({ text, highlight, className }) => {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
  };

  return (
    <motion.div
      className={`${className} flex flex-wrap`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => {
        const isHighlight = highlight && highlight.includes(letter);
        return (
          <motion.span
            key={index}
            variants={child}
            className={isHighlight ? "text-teal-400 font-semibold" : ""}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

const Introduction = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-950 px-6 md:px-20 py-16"
    >
      {/* Left Side: Text Card */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 bg-gray-900 bg-opacity-90 backdrop-blur-xl rounded-2xl p-10 shadow-lg border border-gray-700 text-center md:text-left hover:shadow-teal-500/30 transition duration-300"
      >
        <AnimatedText
          text="Hi, I'm Shah Muhammad Rubayet Alam"
          className="text-4xl md:text-5xl font-bold text-gray-100"
          highlight="Shah Muhammad Rubayet Alam"
        />

        <h2 className="text-xl md:text-2xl text-gray-300 mt-2 font-medium">
          Full Stack Developer
        </h2>
        <p className="mt-4 text-gray-400 leading-relaxed max-w-lg">
          I design and develop modern, responsive, and high-performance web
          applications with a focus on{" "}
          <span className="text-teal-400 font-semibold">user experience</span> and{" "}
          <span className="text-teal-400 font-semibold">clean code</span>.
        </p>

        {/* Resume Button */}
        <div className="mt-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download
            className="bg-gradient-to-r from-teal-500 to-cyan-400 text-white px-6 py-3 rounded-xl shadow-md hover:from-teal-600 hover:to-cyan-500 transition duration-300 inline-block"
          >
            📄 Download Resume
          </motion.a>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          {[
            { icon: <FaGithub />, link: "https://github.com/rubayetalam21/" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/smrubayetalam/" },
            { icon: <FaFacebook />, link: "https://www.facebook.com/rubayetalam21" },
          ].map(({ icon, link }, idx) => (
            <motion.a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#14B8A6" }}
              className="text-gray-400 text-2xl transition-colors"
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Right Side: Profile Photo */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center mt-8 md:mt-0"
      >
        <motion.img
          src="/DSC_4632.JPG"
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover shadow-lg border border-gray-700 hover:shadow-teal-500/30 transition duration-300"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
    </section>
  );
};

export default Introduction;
