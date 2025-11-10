"use client";

import React from "react";

const ContactInfo: React.FC = () => {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-800 py-20 px-6 md:px-16">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Have questions about Retrievia, pricing, or enterprise solutions? We'd love to hear from you. Our team usually responds within 24 hours.</p>
                </div>

                <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-16">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
                        Send Us a Message
                    </h2>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Your message has been sent! 🚀");
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div className="flex flex-col md:col-span-2">
                            <label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="How can we help?"
                            />
                        </div>

                        <div className="flex flex-col md:col-span-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                required
                                className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        <div className="md:col-span-2 text-center mt-4">
                            <button
                                type="submit"
                                className="text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-10 py-3 transition hover:shadow-lg"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </section>

                <section className="text-center mb-16">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                        Get in Touch
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        You can also reach us directly through email or visit our office during business hours.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">📍 Office</h3>
                            <p>Retrievia HQ</p>
                            <p>123 Innovation Street</p>
                            <p>San Francisco, CA 94105</p>
                        </div>

                        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">📧 Email</h3>
                            <p>
                                <a
                                    className="text-blue-600 hover:underline"
                                >
                                    contact@retrievia.ai
                                </a>
                            </p>
                            <p>
                                <a
                                    className="text-blue-600 hover:underline"
                                >
                                    support@retrievia.ai
                                </a>
                            </p>
                        </div>

                        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">⏰ Business Hours</h3>
                            <p>Mon - Fri: 10:00 AM - 5:00 PM</p>
                            <p>Sat - Sun: Closed</p>
                        </div>
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
                        Our Location
                    </h2>
                    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-md border border-gray-100">
                        <iframe
                            title="Retrievia HQ Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0000000000005!2d-122.4013779846827!3d37.787950179756975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d8fbc3cf%3A0x123456789abcdef!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v0000000000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ContactInfo;
