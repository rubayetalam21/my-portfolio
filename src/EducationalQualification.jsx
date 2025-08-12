import React from "react";
import { motion } from "framer-motion";

const educationData = [
    {
        degree: "Bachelor of Science in Computer Science and Engineering",
        institution: "Rajshahi University of Engineering and Technology",
        year: "2012 - 2016",
        details: "Focused on software development, data structures, and algorithms.",
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Notre Dame College",
        year: "2010 - 2011",
        details: "Science group, GPA: 5.00 (out of 5.00).",
    },
    {
        degree: "Secondary School Certificate (SSC)",
        institution: "P D B High School",
        year: "2000-2009",
        details: "Science group, GPA: 5.00 (out of 5.00).",
    },
];

const EducationalQualification = () => {
    return (
        <section
            id="education"
            className="min-h-screen bg-gray-50 px-6 md:px-20 py-20"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-extrabold text-teal-600 mb-12 text-center">
                    Educational Qualification
                </h2>

                <div className="space-y-10">
                    {educationData.map(({ degree, institution, year, details }, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: idx * 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-lg border-l-8 border-teal-500"
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                                {degree}
                            </h3>
                            <p className="text-teal-600 font-medium mb-1">{institution}</p>
                            <p className="text-gray-500 italic mb-4">{year}</p>
                            <p className="text-gray-700 leading-relaxed">{details}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationalQualification;
