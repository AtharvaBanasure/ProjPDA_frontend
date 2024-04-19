import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="relative  b-0 l-0 r-0 text-white body-font bg-gray-700 max-h-screen mt-auto">
            <div className="container py-4 mx-auto flex flex-col items-center md:flex-row justify-between">
                <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <span className="ml-3 text-xl">Professional Development Activity</span>
                </Link>
                <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © 2024 PDA —
                    <a href="https://twitter.com/pict" target='_blank' className="text-white ml-1" rel="noopener noreferrer">
                        @pict
                    </a>
                </p>
                <div className="flex flex-col items-center mt-4 px-32 md:mt-0">
                    <p align='center' className="text-white mb-2">This page was viewed</p>
                    <div className="flex items-center">
                        <img align="center" alt="Repo Visitors" src="https://profile-counter.glitch.me/Pda/count.svg"/>
                        
                    </div>
                    <p className="text-white ml-2">times</p>
                </div>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href="https://www.facebook.com/PICTOfficial/" target='_blank' className="text-white">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a href="https://twitter.com/punepict?lang=en" target='_blank' className="ml-3 text-white">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/pict.pune/" target='_blank' className="ml-3 text-white">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                    <a href="https://in.linkedin.com/school/pune-institute-of-computer-technology/" target='_blank' className="ml-3 text-white">
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                </span>
            </div>
        </div>
    );
}

export default Footer;
