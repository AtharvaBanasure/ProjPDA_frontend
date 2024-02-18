import React from 'react';

function UpcomingEvents() {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="h-1 bg-gray-200 rounded overflow-hidden">
                    <div className="w-24 h-full bg-[#426B1F] hover:bg-[#486a2a]"></div>
                </div>
                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                    <h1 className="sm:w-1/5 text-gray-900 font-medium title-font text-4xl mb-2 sm:mb-0">Upcoming Sessions</h1>
                </div>
                <div className="-my-8 divide-y-2 divide-gray-100">
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-gray-700">PDA Coding</span>
                            <span className="mt-1 text-gray-500 text-sm">01 Feb 2024</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Professional Development Association (PDA) – the PDA Coding Contest!</h2>
                            <p className="leading-relaxed">Get ready for an exhilarating challenge as the Professional Development Association (PDA) presents the PDA Coding Contest! Scheduled for 1st February 2024 from 6:00 PM to 8:00 PM, this competition is open to SE and TE IT students of PICT. Dive into the world of competitive programming and DSA problems on the HackerRank platform for a chance to showcase your coding skills and win certificates and rewards.<br />
                                After the contest, join us at 9:00 PM via Google Meet for a post-contest discussion. This interactive session provides a platform to discuss approaches, share insights, and delve into the problem-solving strategies employed by your fellow participants.<br />
                                To participate, create a HackerRank account, join the contest using the provided link, and be part of the post-contest discussion. The contest link and Google Meet session link will be shared accordingly.<br />
                                Don't miss out on this opportunity to sharpen your coding prowess and engage in a collaborative learning experience. </p>
                            <button className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Add similar changes for other sections */}
                </div>
            </div>
        </section>
    );
}

export default UpcomingEvents;
