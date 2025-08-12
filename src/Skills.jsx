import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaReact,
    FaJsSquare,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaCode,
    FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const skillCategories = [
    {
        key: "frontend",
        category: "Frontend",
        skills: [
            { name: "React", icon: <FaReact className="text-teal-500 w-6 h-6" /> },
            { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 w-6 h-6" /> },
            { name: "HTML5", icon: <FaHtml5 className="text-orange-600 w-6 h-6" /> },
            { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 w-6 h-6" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 w-6 h-6" /> },
        ],
    },
    {
        key: "backend",
        category: "Backend",
        skills: [
            { name: "Node.js", icon: <FaNodeJs className="text-green-600 w-6 h-6" /> },
            { name: "Express.js", icon: <SiExpress className="text-gray-700 w-6 h-6" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-700 w-6 h-6" /> },
        ],
    },
    {
        key: "tools",
        category: "Tools",
        skills: [
            { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600 w-6 h-6" /> },
            { name: "VS Code", icon: <FaCode className="text-blue-700 w-6 h-6" /> },
        ],
    },
];

const Skills = () => {
    const [activeTab, setActiveTab] = useState("frontend");

    const currentCategory = skillCategories.find(cat => cat.key === activeTab);

    return (
        <section id="skills" className="min-h-screen bg-white px-6 md:px-20 py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-extrabold text-teal-600 mb-12 text-center">
                    Skills
                </h2>

                {/* Tabs */}
                <div className="flex justify-center space-x-8 mb-16">
                    {skillCategories.map(({ key, category }) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`px-6 py-2 text-lg font-semibold rounded-full transition
                              ${activeTab === key
                                    ? "bg-teal-600 text-white shadow-lg"
                                    : "bg-gray-200 text-gray-700 hover:bg-teal-300 hover:text-white"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills List */}
                <div className="max-w-xl mx-auto space-y-8">
                    {currentCategory.skills.map(({ name, icon }) => (
                        <motion.div
                            key={name}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center space-x-4 cursor-default group"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 group-hover:bg-teal-200 transition">
                                {icon}
                            </div>
                            <span className="text-gray-700 text-lg font-medium">{name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
