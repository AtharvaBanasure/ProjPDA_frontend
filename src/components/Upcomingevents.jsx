import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

function UpcomingEvents() {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        // Fetch data from the backend API
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/sessions');
                setSessions(response.data);
            } catch (error) {
                console.error('Error fetching sessions:', error.message);
            }
        };

        fetchData(); // Invoke the fetch data function
    }, []);

    return (
        <>
            <Navbar />
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="h-1 bg-gray-200 rounded overflow-hidden">
                        <div className="w-24 h-full bg-[#426B1F] hover:bg-[#486a2a]"></div>
                    </div>
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 className="sm:w-1/5 text-gray-900 font-medium title-font text-4xl mb-2 sm:mb-0">Upcoming Sessions</h1>
                    </div>
                    <div className="-my-8 divide-y-2 divide-gray-100">
                        {sessions.map((session) => (
                            <div key={session._id} className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span className="font-semibold title-font text-gray-700">{session.title}</span>
                                    <span className="mt-1 text-gray-500 text-sm">{session.date}</span>
                                    {session.image && (
                                        <img width={250} src={`data:image/jpeg;base64,${session.image}`} alt={session.title} className="mt-4 rounded-md" />
                                    )}
                                    <span className={`mt-2 inline-flex items-center px-2 py-0.5 rounded-md text-sm font-medium ${session.tag === 'upcoming' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                                        }`}>
                                        {session.tag === 'upcoming' ? 'Upcoming' : 'Past'}
                                    </span>
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{session.title}</h2>
                                    <p className="leading-relaxed">{session.description}</p>
                                    <button className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <Footer /> */}
        </>
    );
}

export default UpcomingEvents;
