"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/assests/images/logo1.png";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);

    // Toggle mobile menu
    const handleMenuToggle = () => {
        setIsMenuOpen((prev) => !prev);
    };

    // Toggle dropdown menu
    const handleDropdownToggle = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="bg-white shadow-md">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <button onClick={() => handleNavigation("/")} className="block hover:cursor-pointer">
                    <Image
                        src={logo}
                        alt="logo"
                        width={160}
                        height={100}
                        priority
                        className="object-contain"
                    />
                </button>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav
                        aria-label="Global"
                        className={`${isMenuOpen ? "block" : "hidden"
                            } md:block transition-all duration-200`}
                    >
                        <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-md font-semibold">
                            <li>
                                <button
                                    className="text-gray-600 hover:text-gray-900 transition hover:cursor-pointer"
                                    onClick={() => handleNavigation("/about")}
                                >
                                    About
                                </button>
                            </li>

                            <li className="relative" ref={dropdownRef}>
                                <button
                                    onClick={handleDropdownToggle}
                                    className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition focus:outline-none hover:cursor-pointer"
                                >
                                    Products
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                {isDropdownOpen && (
                                    <div
                                        className="absolute left-0 mt-3 w-48 bg-white border border-gray-100 rounded-lg shadow-lg z-50"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <button onClick={() => handleNavigation("/chat")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer">
                                            Rag AI Chatbot
                                        </button>
                                        <button onClick={() => handleNavigation("https://persona-frontend-one.vercel.app/")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" rel="noopener noreferrer">
                                            Persona Chatbot
                                        </button>
                                    </div>
                                )}
                            </li>

                            <li>
                                <button onClick={() => handleNavigation("/contact")} className="text-gray-600 hover:text-gray-900 transition hover:cursor-pointer">
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex sm:gap-4">
                            <a
                                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                                href="#"
                            >
                                Login
                            </a>

                            <a
                                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-700"
                                href="#"
                            >
                                Register
                            </a>
                        </div>

                        <button
                            onClick={handleMenuToggle}
                            className="md:hidden rounded-sm bg-gray-100 p-2.5 text-gray-600 hover:text-gray-800 transition"
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d={
                                        isMenuOpen
                                            ? "M6 18L18 6M6 6l12 12"
                                            : "M4 6h16M4 12h16M4 18h16"
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;