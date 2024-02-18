// src/components/Login.js
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check credentials (you might want to call an authentication API)
        if (username === 'admin' && password === '1234') {
            onLogin(); // Call the callback to inform the parent component about successful login
        } else {
            // Handle incorrect credentials (show error message, redirect, etc.)
            console.log('Incorrect credentials');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
                <h1 className="text-3xl font-semibold mb-6 text-gray-800">Admin Login</h1>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-4">
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </label>
                    <label className="block mb-4">
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
