import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
            className=" bg-gray-900 flex flex-col items-center justify-center px-6 md:px-20 py-24"
        >
            <h2 className="text-4xl font-extrabold text-white mb-12 text-center">
                Contact Me
            </h2>

            <div className="grid gap-8 md:grid-cols-3 max-w-4xl w-full">
                {/* Email Card */}
                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl shadow-2xl p-8 flex items-center space-x-4 transition transform hover:scale-105">
                    <FaEnvelope className="text-white w-8 h-8" />
                    <a
                        href="mailto:rubayetalam21@gmail.com"
                        className="text-white font-medium hover:underline"
                    >
                        rubayetalam21@gmail.com
                    </a>
                </div>

                {/* Phone Card */}
                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl shadow-2xl p-8 flex items-center space-x-4 transition transform hover:scale-105">
                    <FaPhone className="text-white w-8 h-8" />
                    <a
                        href="tel:+8801717664500"
                        className="text-white font-medium hover:underline"
                    >
                        +880 1717 664500
                    </a>
                </div>

                {/* WhatsApp Card */}
                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl shadow-2xl p-8 flex items-center space-x-4 transition transform hover:scale-105">
                    <FaWhatsapp className="text-white w-8 h-8" />
                    <a
                        href="https://wa.me/+8801717664500"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-medium hover:underline"
                    >
                        WhatsApp Chat
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
