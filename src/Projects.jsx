import React from "react";
import { Link } from "react-router-dom";

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

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen bg-gray-50 px-6 md:px-20 py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-extrabold text-teal-600 mb-12 text-center">
                    Projects
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {projectsData.map(({ id, name, image }) => (
                        <div
                            key={id}
                            className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col"
                        >
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold mb-4">{name}</h3>
                                <Link
                                    to={`/projects/${id}`}
                                    className="mt-auto inline-block text-center bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-full transition"
                                >
                                    View More / Details
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
