// Projects.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiFramer, SiExpress } from "react-icons/si";

const projectsData = [
    {
        id: "proj1",
        name: "Building Management",
        image: "/project1.png",
        techStack: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
        id: "proj2",
        name: "Food Sharing",
        image: "/project2.png",
        techStack: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
        id: "proj3",
        name: "Subscription Box",
        image: "/project3.png",
        techStack: ["React", "Firebase", "Framer Motion"],
    },
];

const techIcons = {
    React: <FaReact className="w-4 h-4 text-sky-400" />,
    "Tailwind CSS": <SiTailwindcss className="w-4 h-4 text-cyan-400" />,
    "Framer Motion": <SiFramer className="w-4 h-4 text-pink-400" />,
    "Node.js": <FaNodeJs className="w-4 h-4 text-green-400" />,
    Express: <SiExpress className="w-4 h-4 text-white" />,
    MongoDB: <SiMongodb className="w-4 h-4 text-green-500" />,
    Firebase: <SiFirebase className="w-4 h-4 text-yellow-400" />,
};

const Projects = () => {
    return (
        <section id="projects" className="bg-slate-900 px-6 md:px-20 py-24">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-extrabold text-white mb-12 text-center">
                    Projects
                </h2>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {projectsData.map(({ id, name, image, techStack }) => (
                        <div
                            key={id}
                            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg border border-slate-700 overflow-hidden hover:shadow-teal-500/30 transition-transform transform hover:-translate-y-2"
                        >
                            <img src={image} alt={name} className="w-full h-48 object-cover" />

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-teal-400 mb-4">{name}</h3>

                                {/* Tech Stack Pills */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="flex items-center gap-1 bg-slate-700 text-white text-xs font-medium px-3 py-1 rounded-full"
                                        >
                                            {techIcons[tech]} <span>{tech}</span>
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    to={`/projects/${id}`}
                                    className="mt-auto inline-block text-center bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full transition"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
