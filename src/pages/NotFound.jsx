import React from 'react';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-center mb-4">404</h1>
            <p className="text-lg text-center">Page not found.</p>
            <a href="/" className="mt-6 inline-block px-4 py-2 bg-green-700 hover:bg-green-500 text-white font-bold rounded-md">
                Go Home
            </a>
        </div>
    );
};

export default NotFound;
