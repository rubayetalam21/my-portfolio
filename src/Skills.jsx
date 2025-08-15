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
        color: "from-sky-400 via-blue-400 to-indigo-400",
        skills: [
            { name: "React", icon: <FaReact className="text-sky-200 w-10 h-10" /> },
            { name: "JavaScript", icon: <FaJsSquare className="text-yellow-300 w-10 h-10" /> },
            { name: "HTML5", icon: <FaHtml5 className="text-orange-300 w-10 h-10" /> },
            { name: "CSS3", icon: <FaCss3Alt className="text-blue-300 w-10 h-10" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-200 w-10 h-10" /> },
        ],
    },
    {
        key: "backend",
        category: "Backend",
        color: "from-emerald-700 via-green-700 to-teal-700",
        skills: [
            { name: "Node.js", icon: <FaNodeJs className="text-lime-200 w-10 h-10" /> },
            { name: "Express.js", icon: <SiExpress className="text-gray-200 w-10 h-10" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-200 w-10 h-10" /> },
        ],
    },
    {
        key: "tools",
        category: "Tools",
        color: "from-purple-500 via-violet-500 to-pink-500",
        skills: [
            { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-300 w-10 h-10" /> },
            { name: "VS Code", icon: <FaCode className="text-blue-200 w-10 h-10" /> },
        ],
    },
];

const Skills = () => {
    const [activeTab, setActiveTab] = useState("frontend");
    const currentCategory = skillCategories.find(cat => cat.key === activeTab);

    return (
        <section id="skills" className="bg-gray-950 px-6 md:px-20 py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-extrabold text-white mb-12 text-center tracking-tight">
                    Skills
                </h2>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {skillCategories.map(({ key, category, color }) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 shadow-md
                              ${activeTab === key
                                    ? `bg-gradient-to-r ${color} text-white shadow-xl`
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
                            whileHover={{
                                scale: 1.08,
                                rotate: 1,
                                boxShadow: "0px 10px 25px rgba(0,0,0,0.4)"
                            }}
                            className={`bg-gradient-to-br ${currentCategory.color} rounded-xl shadow-lg p-6 flex flex-col items-center justify-center cursor-pointer border border-white/10`}
                        >
                            <div className="mb-3 drop-shadow-lg">{icon}</div>
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
