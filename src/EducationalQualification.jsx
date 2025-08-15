import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
    {
        degree: "Bachelor of Science in Computer Science and Engineering",
        institution: "Rajshahi University of Engineering and Technology",
        year: "2012 - 2016",
        details: "Focused on software development, data structures, and algorithms.",
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Notre Dame College, Dhaka",
        year: "2010 - 2011",
        details: "Science group, GPA: 5.00 (out of 5.00).",
    },
    {
        degree: "Secondary School Certificate (SSC)",
        institution: "P D B High School, Ghorashal, Palash, Narsingdi",
        year: "2008-2009",
        details: "Science group, GPA: 5.00 (out of 5.00).",
    },
];

const EducationalQualification = () => {
    return (
        <section
            id="education"
            className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 px-6 md:px-20 py-16"
        >
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-extrabold text-white mb-12 text-center">
                    Educational Qualification
                </h2>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {educationData.map(({ degree, institution, year, details }, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700 hover:border-teal-400 p-6 hover:scale-105 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-teal-500/20 p-3 rounded-full group-hover:bg-teal-500/30 transition-colors">
                                    <FaGraduationCap className="text-teal-400 text-2xl" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">
                                    {degree}
                                </h3>
                            </div>

                            <p className="text-cyan-300 font-medium mb-1">{institution}</p>
                            <p className="text-gray-400 italic mb-4">{year}</p>
                            <p className="text-gray-300 leading-relaxed">{details}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationalQualification;
