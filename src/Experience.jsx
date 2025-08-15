import React from "react";
import { motion } from "framer-motion";

const experienceData = [
    {
        role: "Assistant Programmer",
        company: "Department of ICT",
        period: "June 2019 - Present",
        description:
            "Provided IT support, maintained internal systems, and ensured smooth digital operations.",
    },
    {
        role: "Senior Officer (IT)",
        company: "Bangladesh Development Bank Ltd",
        period: "June 2018 - June 2019",
        description:
            "Managed databases, optimized workflows, and enhanced IT infrastructure.",
    },
];

const Experience = () => {
    return (
        <section id="experience" className="bg-gray-950 px-6 md:px-20 py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-extrabold text-white mb-14 text-center">
                    Professional Experience
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {experienceData.map(({ role, company, period, description }, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            viewport={{ once: true }}
                            className="bg-gray-800 border border-gray-700 rounded-3xl p-8 shadow-lg 
                                       hover:shadow-teal-400/40 hover:scale-105 transition duration-300"
                        >
                            <h3 className="text-2xl font-semibold text-teal-400 mb-2">{role}</h3>
                            <p className="text-cyan-300 font-medium">{company}</p>
                            <p className="text-gray-400 italic mb-4 text-sm">{period}</p>
                            <p className="text-gray-300 leading-relaxed">{description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
