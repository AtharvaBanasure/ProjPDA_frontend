// src/pages/AdminDashboard.js
import React, { useState } from 'react';
import SessionForm from '../components/SessionForm';
import Login from '../components/Login';
import { useNavigate } from 'react-router-dom'


const AdminDashboard = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    const handleLogin = () => {
        setLoggedIn(true);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    let navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    }

    return (
        <div>
            {isLoggedIn ? (
                <>
                    <div className="flex h-screen">
                        {/* Vertical Navbar on the left */}
                        <div className="bg-gray-800 text-white p-4 w-1/6 flex flex-col">
                            <h2 className="text-2xl font-semibold mb-4">Admin Navbar</h2>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        onClick={() => handleLinkClick('create-session')}
                                        className={`text-gray-300 hover:text-white focus:outline-none ${activeLink === 'create-session' && 'font-bold'}`}
                                    >
                                        Create Session
                                    </button>
                                </li>
                                <li>
                                    <button

                                        className={`text-gray-300 hover:text-white focus:outline-none ${activeLink === 'create-mcqs' && 'font-bold'}`}
                                    >
                                        Create MCQs
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={goHome}
                                        className={`text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full focus:outline-none ${activeLink === 'logout' && 'font-bold'}`}
                                    >
                                        Logout
                                    </button>
                                </li>
                                {/* Add more links as needed */}
                            </ul>
                        </div>

                        {/* Content on the right */}
                        <div className="bg-gray-100 p-8 w-5/6">
                            <h1 className="text-3xl font-semibold mb-6 text-gray-800">Admin Dashboard</h1>
                            {activeLink === 'create-session' && <SessionForm />}
                            {activeLink === 'create-mcqs' && <p>Render Create MCQs form here</p>}
                            {activeLink === 'logout' && <p>Handle logout logic here</p>}
                        </div>
                    </div>
                </>
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>

    );
};

export default AdminDashboard;
