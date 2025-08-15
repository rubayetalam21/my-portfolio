import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section
            id="contact"
            className="bg-gray-950 flex flex-col items-center justify-center px-6 md:px-20 py-20"
        >
            <motion.h2
                className="text-4xl font-extrabold text-white mb-12 text-center"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0.5 }}
            >
                Contact Me
            </motion.h2>

            <div className="grid gap-8 md:grid-cols-3 max-w-4xl w-full">
                {/* Email Card */}
                <motion.div
                    className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl shadow-2xl p-8 flex items-center space-x-4 transition transform hover:scale-115"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.5 }}
                >
                    <FaEnvelope className="text-white w-8 h-8" />
                    <a
                        href="mailto:rubayetalam21@gmail.com"
                        className="text-white font-medium hover:underline"
                    >
                        rubayetalam21@gmail.com
                    </a>
                </motion.div>

                {/* Phone Card */}
                <motion.div
                    className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl shadow-2xl p-8 flex items-center space-x-4 transition transform hover:scale-115"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.5 }}
                >
                    <FaPhone className="text-white w-8 h-8" />
                    <a
                        href="tel:+8801717664500"
                        className="text-white font-medium hover:underline"
                    >
                        +880 1717 664500
                    </a>
                </motion.div>

                {/* WhatsApp Card */}
                <motion.div
                    className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl shadow-2xl p-8 flex items-center space-x-4 transition transform hover:scale-115"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.5 }}
                >
                    <FaWhatsapp className="text-white w-8 h-8" />
                    <a
                        href="https://wa.me/+8801717664500"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-medium hover:underline"
                    >
                        WhatsApp Chat
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
