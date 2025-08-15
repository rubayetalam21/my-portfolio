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
        color: "from-blue-500 to-indigo-500",
        skills: [
            { name: "React", icon: <FaReact className="text-cyan-300 w-10 h-10" /> },
            { name: "JavaScript", icon: <FaJsSquare className="text-yellow-300 w-10 h-10" /> },
            { name: "HTML5", icon: <FaHtml5 className="text-orange-400 w-10 h-10" /> },
            { name: "CSS3", icon: <FaCss3Alt className="text-blue-400 w-10 h-10" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300 w-10 h-10" /> },
        ],
    },
    {
        key: "backend",
        category: "Backend",
        color: "from-green-500 to-emerald-500",
        skills: [
            { name: "Node.js", icon: <FaNodeJs className="text-lime-300 w-10 h-10" /> },
            { name: "Express.js", icon: <SiExpress className="text-white w-10 h-10" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-300 w-10 h-10" /> },
        ],
    },
    {
        key: "tools",
        category: "Tools",
        color: "from-purple-500 to-pink-500",
        skills: [
            { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-300 w-10 h-10" /> },
            { name: "VS Code", icon: <FaCode className="text-blue-300 w-10 h-10" /> },
        ],
    },
];

const Skills = () => {
    const [activeTab, setActiveTab] = useState("frontend");
    const currentCategory = skillCategories.find(cat => cat.key === activeTab);

    return (
        <section id="skills" className="bg-gray-900 px-6 md:px-20 py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-extrabold text-white mb-12 text-center">
                    Skills
                </h2>

                {/* Tabs */}
                <div className="flex justify-center space-x-4 mb-16">
                    {skillCategories.map(({ key, category }) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`px-6 py-2 text-lg font-semibold rounded-full transition
                              ${activeTab === key
                                    ? "bg-gradient-to-r " + skillCategories.find(cat => cat.key === key).color + " text-white shadow-lg"
                                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {currentCategory.skills.map(({ name, icon }, idx) => (
                        <motion.div
                            key={name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            className={`bg-gradient-to-br ${currentCategory.color} rounded-xl shadow-lg p-6 flex flex-col items-center justify-center cursor-pointer`}
                        >
                            <div className="mb-3">{icon}</div>
                            <span className="text-white text-lg font-medium text-center">
                                {name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
