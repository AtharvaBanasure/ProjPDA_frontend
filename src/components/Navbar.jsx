import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/images/PDA_Logo_trsp.png";
import { Link } from 'react-router-dom';
import { UserContext } from "../UserContext";

function Navbar() {

    const { setUserInfo, userInfo } = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:3001/profile', {
            credentials: 'include'
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            })
        })
    }, []);

    function logout() {
        fetch('http://localhost:3001/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;

    return (
        <div className="m-7">
            <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Link to='/'><img src={Logo} className="h-8" alt="Flowbite Logo" /></Link>
                        <Link to='/'>
                            <span className="px-2 font-bold text-lg">
                                Professional Development Activity
                            </span>
                        </Link>
                    </div>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                        <div>
                            {username && (
                                <>
                                    <Link
                                        to="/createPost"
                                        className="text-white  bg-green-700 hover:bg-green-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                                    >
                                        Create new post
                                    </Link>
                                    <Link
                                        onClick={logout}
                                        className=" ml-1 text-white bg-[#e70101] hover:bg-[#a53232] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                                    >
                                        Logout
                                    </Link>
                                </>

                            )}
                            {
                                !username && (
                                    <>
                                        <Link
                                            to="/login"
                                            className="text-white bg-green-700 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                                        >
                                            Login
                                        </Link>

                                        {/* <Link
                                            to="/register"
                                            className=" ml-1 text-white bg-[#426B1F] hover:bg-[#486a2a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                                        >
                                            Register
                                        </Link> */}
                                    </>
                                )
                            }
                        </div>

                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-sticky"
                            aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14">
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
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 px-3 text-black bg-[#426B1F] rounded md:bg-transparent md:text-[#426B1F] md:p-0"
                                    aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#426B1F] md:p-0">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/events"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#426B1F] md:p-0">
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#426B1F] md:p-0">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
