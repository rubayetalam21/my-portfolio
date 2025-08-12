import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <section
            id="about"
            className="min-h-screen relative flex items-center justify-center bg-gradient-to-tr from-teal-50 via-white to-teal-50 px-6 md:px-20 py-4 overflow-hidden"
        >
            {/* Decorative accent circle */}
            <div className="hidden md:block absolute top-10 right-10 w-64 h-64 bg-teal-200 rounded-full opacity-20 blur-3xl"></div>

            <div className="max-w-6xl flex flex-col md:flex-row items-center gap-16 z-10">
                {/* Left Side: Profile Image with floating animation */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0"
                >
                    <motion.img
                        src="/Pro pic.jpg"
                        alt="Profile"
                        className="w-64 h-64 md:w-80 md:h-80 rounded-3xl object-cover shadow-2xl border-8 border-white"
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 3, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>

                {/* Right Side: About Text with card background */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="flex-1 bg-white bg-opacity-90 backdrop-blur-md rounded-3xl p-12 shadow-xl"
                >
                    <h2 className="text-4xl font-extrabold text-teal-600 mb-4 tracking-wide">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mb-8"></div>

                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        My programming journey began with a <span className="font-semibold text-teal-500">curiosity about how websites and applications work.</span> What started as experimenting with HTML and CSS quickly evolved into a deep passion for building <span className="italic text-teal-600">interactive, user-friendly</span> web applications. Over the years, I’ve expanded my skills to include <span className="font-semibold">JavaScript, React, Node.js</span>, and various modern web technologies.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        I enjoy working on projects that solve <span className="font-semibold text-teal-500">real-world problems</span>, especially those involving <span className="underline decoration-teal-400">clean UI design</span>, <span className="underline decoration-teal-400">scalable backend systems</span>, and <span className="underline decoration-teal-400">optimized performance</span>. I thrive in collaborative environments where ideas flow freely, but I also value focused solo work to dive deep into complex challenges.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        Outside of coding, you’ll often find me <span className="font-semibold text-teal-500">playing football</span>, <span className="font-semibold text-teal-500">exploring new places</span>, or <span className="font-semibold text-teal-500">photographing urban architecture</span>. I believe hobbies bring balance to life and often inspire fresh ideas for my work.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                        At my core, I’m someone who values <span className="font-semibold text-teal-600">continuous learning</span>, <span className="font-semibold text-teal-600">teamwork</span>, and creating things that make a positive impact. Whether it’s a sleek front-end interface or a robust backend service, I approach each project with enthusiasm, precision, and creativity.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
