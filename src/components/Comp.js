
// import "../../index.css";
import React, { useState } from "react";
import timelinecomp from "../timelinecomp";

function Comp() {
    const [expandedYear, setExpandedYear] = useState("");

    const toggleYear = (year) => {
        if (expandedYear === year) {
            setExpandedYear("");
        } else {
            setExpandedYear(year);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-800">
            <div className="w-full p-6 bg-gray-800 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-9 text-center text-cyan-400">
                    Computer Department
                </h1>
                <hr className="border-t border-gray-100 mb-16 mx-auto w-1/2" />

                {timelinecomp.map((yearData) => (
                    <div
                        key={yearData.year}
                        className={`mb-6 pl-4 pr-4 border-l-4 border-r-4 border-transparent shadow-lg shadow-cyan-800 ${expandedYear === yearData.year ? "neon-border" : ""
                            }`}
                    >
                        <div
                            className={`flex justify-between items-center cursor-pointer ${expandedYear === yearData.year ? "neon-text" : ""
                                }`}
                            onClick={() => toggleYear(yearData.year)}
                        >
                            <h2
                                className={`text-xl font-bold mb-2 ${expandedYear === yearData.year
                                    ? "text-cyan-300"
                                    : "text-white"
                                    }`}
                            >
                                {yearData.year}: {yearData.title}
                            </h2>
                            <div>
                                {expandedYear === yearData.year ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-cyan-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-cyan-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 5v14M5 12h14"
                                        />
                                    </svg>
                                )}
                            </div>
                        </div>
                        {expandedYear === yearData.year && (
                            <div className="pl-4 mt-2 text-white">
                                <ul className="list-disc pl-6"> {/* Use a <ul> element with list-disc style for bullet points */}
                                    {yearData.events.map((event, index) => (
                                        <li key={index} className="mb-3">
                                            <h3 className="text-lg font-semibold text-cyan-500 mb-1">
                                                <u>{event.title}</u> {/* Add <u> tag for underlining */}
                                            </h3>
                                            <p>{event.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comp;
