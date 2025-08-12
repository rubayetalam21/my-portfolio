import React from "react";
import { motion } from "framer-motion";

const experienceData = [
    {
        role: "Assistant Programmer",
        company: "Department of ICT",
        period: "June 2019 - Present",
        description: "Provided IT Support",
    },
    {
        role: "Senior Officer (IT)",
        company: "Bangladesh Development Bank Ltd",
        period: "June 2018 - June 2019",
        description: "Database Management",
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="min-h-screen bg-white px-6 md:px-20 py-20"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-extrabold text-teal-600 mb-12 text-center">
                    Professional Experience
                </h2>

                <div className="space-y-12">
                    {experienceData.map(({ role, company, period, description }, idx) => (
                        <motion.div
                            key={idx}
                            animate={{
                                y: [0, 5, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: idx * 1,
                            }}
                            className="bg-gray-50 p-8 rounded-3xl shadow-md border-l-8 border-teal-500"
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-1">{role}</h3>
                            <p className="text-teal-600 font-medium mb-1">{company}</p>
                            <p className="text-gray-500 italic mb-4">{period}</p>
                            <p className="text-gray-700 leading-relaxed">{description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
