// src/components/Login.js
import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom'
import { UserContext } from '../UserContext';

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext);

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });

        if (response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                localStorage.setItem('token', userInfo.token);
                setRedirect(true);
            });
        }
        else {
            alert("Wrong Credential");
        }

    };

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
                <h1 className="text-3xl font-semibold mb-6 text-gray-800"> Login</h1>


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
                    <button
                        type="submit"
                        className="bg-green-800 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-blue"
                    >
                        Login
                    </button>
                </form>



            </div>
        </div>
    );
};

export default LoginPage;
