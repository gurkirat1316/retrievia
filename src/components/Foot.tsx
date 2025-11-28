"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Foot: React.FC = () => {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <footer className="bg-neutral-100 dark:bg-neutral-800 py-5 px-3 border-t border-neutral-200 dark:border-neutral-700">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-neutral-600 dark:text-neutral-300">
                    <div className="text-base sm:text-lg font-medium text-center md:text-left">
                        © 2025{" "}
                        <button
                            onClick={() => handleNavigation("/")}
                            className="text-neutral-800 dark:text-neutral-100 font-semibold hover:underline focus:outline-none"
                        >
                            Retrievia
                        </button>
                        . All rights reserved.
                    </div>

                    <div className="hidden md:block h-1 w-1 rounded-full bg-neutral-400" aria-hidden="true"></div>
                    <nav className="flex items-center gap-6 sm:gap-8">
                        <button
                            onClick={() => handleNavigation("/privacy-policy")}
                            className="text-sm sm:text-base font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white 
                                transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 
                                after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 
                                hover:after:w-full focus:outline-none hover:cursor-pointer"
                            aria-label="Privacy Policy"
                        >
                            Privacy Policy
                        </button>

                        <button
                            onClick={() => handleNavigation("/terms-of-service")}
                            className="text-sm sm:text-base font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white 
                                transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 
                                after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 
                                hover:after:w-full focus:outline-none hover:cursor-pointer"
                            aria-label="Terms of Service"
                        >
                            Terms of Service
                        </button>

                        <button
                            onClick={() => handleNavigation("/contact")}
                            className="text-sm sm:text-base font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white 
                                transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 
                                after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 
                                hover:after:w-full focus:outline-none hover:cursor-pointer"
                            aria-label="Contact"
                        >
                            Contact
                        </button>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Foot;