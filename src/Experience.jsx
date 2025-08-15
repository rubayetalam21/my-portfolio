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
            className=" bg-gray-900 px-6 md:px-20 py-24"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-extrabold text-white mb-12 text-center">
                    Professional Experience
                </h2>

                <div className="grid gap-10 md:grid-cols-2">
                    {experienceData.map(({ role, company, period, description }, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: idx * 0.3 }}
                            viewport={{ once: true }}
                            className="bg-gray-800 rounded-3xl shadow-2xl border-1 border-gradient-to-r border-teal-500 p-8 hover:scale-105 transform transition duration-300"
                        >
                            <h3 className="text-2xl font-semibold text-teal-400 mb-2">{role}</h3>
                            <p className="text-cyan-300 font-medium mb-1">{company}</p>
                            <p className="text-gray-400 italic mb-4">{period}</p>
                            <p className="text-gray-300 leading-relaxed">{description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
