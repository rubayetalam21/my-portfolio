import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const projectsData = [
    {
        id: "proj1",
        name: "Building Management",
        image: "/project1.png",
        techStack: "React, Tailwind CSS, Framer Motion",
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
        techStack: "React, Node.js, Express, MongoDB",
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
        techStack: "React.js, Firebase",
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
        <section className="min-h-screen bg-gray-900 px-6 md:px-20 py-20 flex justify-center">
            <div className="max-w-5xl w-full bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl shadow-2xl p-10 space-y-8 text-white transition transform hover:scale-105">
                <button
                    onClick={() => navigate(-1)}
                    className="text-white hover:underline"
                >
                    &larr; Back to Projects
                </button>

                <h1 className="text-4xl font-extrabold mb-6">{project.name}</h1>

                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg mb-8"
                />

                <div className="space-y-4">
                    <p>
                        <strong>Main Technology Stack:</strong> {project.techStack}
                    </p>
                    <p>
                        <strong>Brief Description:</strong> {project.description}
                    </p>
                    <p>
                        <strong>Live Project Link:</strong>{" "}
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-gray-200"
                        >
                            {project.liveLink}
                        </a>
                    </p>
                    <p>
                        <strong>GitHub Repository (Client):</strong>{" "}
                        <a
                            href={project.githubClient}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-gray-200"
                        >
                            {project.githubClient}
                        </a>
                    </p>
                    <p>
                        <strong>Challenges Faced:</strong> {project.challenges}
                    </p>
                    <p>
                        <strong>Potential Improvements & Future Plans:</strong>{" "}
                        {project.improvements}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
