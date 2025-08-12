import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
            className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 md:px-20 py-4"
        >
            <h2 className="text-4xl font-extrabold text-teal-600 mb-12">Contact Me</h2>

            <div className="bg-white p-10 rounded-3xl shadow-lg max-w-md w-full space-y-8 text-gray-700">
                <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-teal-600 w-6 h-6" />
                    <a
                        href="mailto:your.email@example.com"
                        className="hover:text-teal-600 transition"
                    >
                        rubayetalam21@gmail.com
                    </a>
                </div>

                <div className="flex items-center space-x-4">
                    <FaPhone className="text-teal-600 w-6 h-6" />
                    <a href="tel:+1234567890" className="hover:text-teal-600 transition">
                        +880 1717 664500
                    </a>
                </div>

                <div className="flex items-center space-x-4">
                    <FaWhatsapp className="text-teal-600 w-6 h-6" />
                    <a
                        href="https://wa.me/+8801717664500"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-600 transition"
                    >
                        WhatsApp Chat
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
