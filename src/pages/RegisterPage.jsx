import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            console.log('Passwords do not match');
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/register', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.status === 200) {
                alert('Registration Successful.');
                navigate('/login');
            } else {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error('Registration failed:', error.message);
            alert('Registration failed. Please try again later.');
        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
                <h1 className="text-3xl font-semibold mb-6 text-gray-800">Register</h1>

                <form onSubmit={handleSubmit}>
                    <label className="block mb-4">
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                        />
                    </label>
                    <label className="block mb-4">
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                        />
                    </label>
                    <label className="block mb-4">
                        Confirm Password:
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-green-800 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-blue"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;