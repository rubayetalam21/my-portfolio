import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full backdrop-blur-md bg-slate-900/70 text-white z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
                <h1 className="text-2xl font-bold text-teal-400">MyPortfolio</h1>
                <div className="flex gap-6">
                    {["home", "projects", "skills", "contact"].map((item) => (
                        <NavLink
                            key={item}
                            to={`/${item === "home" ? "" : item}`}
                            className={({ isActive }) =>
                                `capitalize transition ${isActive
                                    ? "text-teal-400 border-b-2 border-teal-400 pb-1"
                                    : "hover:text-sky-400"
                                }`
                            }
                        >
                            {item}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
