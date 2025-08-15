import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    FaReact,
    FaJsSquare,
    FaNodeJs,
    FaCode,
    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase } from "react-icons/si";

const projectsData = [
    {
        id: "proj1",
        name: "Building Management",
        image: "/project1.png",
        techStack: ["React", "Tailwind CSS", "Framer Motion"],
        description:
            "A modern frontend for the Home Arc platform — a real estate solution for apartment listings, agreements, coupons, and admin management. Built with React and deployed on Firebase Hosting.",
        liveLink: "https://building-management-8a441.web.app/",
        githubClient: "https://github.com/rubayetalam21/building-management-client",
        challenges:
            "Handling secure payment gateway integration and optimizing database queries.",
        improvements:
            "Add CMS integration for easy project updates, and add blog section.",
    },
    {
        id: "proj2",
        name: "Food Sharing",
        image: "/project2.png",
        techStack: ["React", "Node.js", "Express", "MongoDB"],
        description:
            "A client-side React app for the Sharing Foods platform — a community-driven food donation system. Users can browse donated food items, make requests, and manage their contributions with secure authentication.",
        liveLink: "https://food-sharing-32a17.web.app/",
        githubClient: "https://github.com/rubayetalam21/Food-Sharing",
        challenges:
            "Ensuring responsive design across devices and smooth animations without performance drops.",
        improvements:
            "Implement AI-based product recommendations and mobile app version.",
    },
    {
        id: "proj3",
        name: "Subscription Box",
        image: "/project3.png",
        techStack: ["React.js", "Firebase", "Framer Motion"],
        description:
            "This is the client-side React application for Hobby Hub, a platform where users can explore, join, and manage hobby-based community groups. It connects to a RESTful API hosted on Vercel.",
        liveLink: "https://subscription-box-279f3.web.app/",
        githubClient: "https://github.com/rubayetalam21/subscription-box-client",
        challenges:
            "Managing real-time updates and user privacy concerns.",
        improvements:
            "Add gamification features to encourage more sharing and a web app version.",
    },
];

const techIcons = {
    React: <FaReact className="w-6 h-6 text-cyan-300" />,
    "React.js": <FaReact className="w-6 h-6 text-cyan-300" />,
    "Tailwind CSS": <SiTailwindcss className="w-6 h-6 text-blue-400" />,
    "Framer Motion": <FaJsSquare className="w-6 h-6 text-yellow-300" />,
    "Node.js": <FaNodeJs className="w-6 h-6 text-lime-400" />,
    Express: <SiExpress className="w-6 h-6 text-white" />,
    MongoDB: <SiMongodb className="w-6 h-6 text-green-400" />,
    Firebase: <SiFirebase className="w-6 h-6 text-yellow-400" />,
};

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projectsData.find((proj) => proj.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-6 md:px-20">
                <p className="text-white text-xl mb-4">Project not found.</p>
                <button
                    onClick={() => navigate(-1)}
                    className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-full transition"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-gray-900 px-6 md:px-20 py-10 flex justify-center">
            <div className="max-w-6xl w-full bg-gray-800 border rounded-3xl p-10 shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="text-teal-400 hover:underline mb-6 inline-block"
                >
                    &larr; Back to Projects
                </button>

                {/* Title */}
                <h1 className="text-4xl font-extrabold text-white mb-8">{project.name}</h1>

                {/* Image */}
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg mb-8"
                />

                {/* Tech Stack */}
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">Technology Stack</h2>
                <div className="flex flex-wrap gap-4 mb-8">
                    {project.techStack.map((tech) => (
                        <div
                            key={tech}
                            className="flex items-center gap-2 bg-gray-900 border border-teal-500 px-4 py-2 rounded-xl shadow-md hover:shadow-teal-400/40 transform hover:scale-105 transition"
                        >
                            {techIcons[tech] || <FaCode className="w-6 h-6 text-white" />}
                            <span className="text-gray-300 font-medium">{tech}</span>
                        </div>
                    ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 mb-8">
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 rounded-xl shadow-lg transition transform hover:scale-105"
                    >
                        <FaExternalLinkAlt className="w-5 h-5" />
                        <span>Live Project</span>
                    </a>

                    <a
                        href={project.githubClient}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-800 hover:to-gray-950 rounded-xl shadow-lg transition transform hover:scale-105"
                    >
                        <FaGithub className="w-5 h-5" />
                        <span>GitHub Repository</span>
                    </a>
                </div>

                {/* Details Cards */}
                <div className="space-y-6">
                    <div className="bg-gray-900 border border-gray-950 p-6 rounded-2xl shadow-md hover:shadow-teal-400/40 transition">
                        <h3 className="font-semibold text-lg text-teal-400 mb-2">Brief Description</h3>
                        <p className="text-gray-300">{project.description}</p>
                    </div>

                    <div className="bg-gray-900 border border-teal-500 p-6 rounded-2xl shadow-md hover:shadow-teal-400/40 transition">
                        <h3 className="font-semibold text-lg text-teal-400 mb-2">Challenges Faced</h3>
                        <p className="text-gray-300">{project.challenges}</p>
                    </div>

                    <div className="bg-gray-900 border border-teal-500 p-6 rounded-2xl shadow-md hover:shadow-teal-400/40 transition">
                        <h3 className="font-semibold text-lg text-teal-400 mb-2">Potential Improvements & Future Plans</h3>
                        <p className="text-gray-300">{project.improvements}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
