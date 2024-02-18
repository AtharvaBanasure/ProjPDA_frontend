// src/pages/AdminDashboard.js
import React, { useState } from 'react';
import SessionForm from '../components/SessionForm';
import Login from '../components/Login';

const AdminDashboard = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    };

    return (
        <div>
            {isLoggedIn ? (
                <>
                    {/* Vertical Navbar on the left */}
                    <div className="bg-gray-800 text-white p-4 w-1/6 flex flex-col">
                        {/* Add your navbar content here */}
                        <h2 className="text-2xl font-semibold mb-4">Admin Navbar</h2>
                        {/* Add additional navigation links or content */}
                    </div>

                    {/* Main Content */}
                    <div className="bg-gray-100 p-8 w-5/6">
                        <h1 className="text-3xl font-semibold mb-6 text-gray-800">Admin Dashboard</h1>
                        <SessionForm />
                    </div>
                </>
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
};

export default AdminDashboard;
