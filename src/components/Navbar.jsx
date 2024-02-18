import React, { useState } from "react";
import Logo from "../assets/images/PDA_Logo_trsp.png";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="m-7">
            <nav className="bg-white fixed w-full z-20 top-0 border-b border-gray-200">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto py-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-8" alt="Flowbite Logo" />
                        <span className="font-bold text-lg">Professional Development Activity</span>
                    </div>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-sticky"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`flex-grow items-center justify-end w-full md:flex md:w-auto ${isMenuOpen ? "block" : "hidden"
                            } md:order-1`}
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col md:flex-row md:space-x-8 md:items-center">
                            <li>
                                <a
                                    href="/"
                                    className="block py-2 px-3 text-white bg-[#426B1F] rounded md:bg-transparent md:text-[#426B1F] md:p-0"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#426B1F] md:p-0"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/event"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#426B1F] md:p-0"
                                >
                                    Events
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#426B1F] md:p-0"
                                >
                                    Contactssss
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
