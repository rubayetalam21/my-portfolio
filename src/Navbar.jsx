import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/skills", label: "Skills" },
        { path: "/projects", label: "Projects" },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-md shadow-lg">
            <div className="max-w-6xl mx-auto px-5 md:px-10">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-2xl font-extrabold tracking-wide"
                    >
                        MyPortfolio
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map(({ path, label }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                                    ${isActive
                                        ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg"
                                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-md px-5 pt-4 pb-6 space-y-4">
                    {navLinks.map(({ path, label }) => (
                        <NavLink
                            key={path}
                            to={path}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-full text-lg font-semibold transition-all duration-300
                                ${isActive
                                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg"
                                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
