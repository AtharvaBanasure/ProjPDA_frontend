import React from 'react';
import PropTypes from 'prop-types';
import aptitude from "../assets/images/aptitude1.webp"
import coding  from "../assets/images/coding1.webp"
import oop  from "../assets/images/oop.png"
import dbms  from "../assets/images/dbms.jpeg"

function Resources(props) {
  return (
    <section className="text-black bg-white body-font mx-14">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-black font-medium title-font text-2xl mb-2 sm:mb-0">
              Resources
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3  sm:mb-0 mb-6">
            <div className="rounded-lg overflow-hidden bg-gray-100">
              <img
                alt="Object Oriented Programming"
                className="object-cover object-center h-64 w-full"
                src={oop}
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-medium title-font text-black mt-5 mb-3">
                Object Oriented Programming
              </h2>
              <p className="text-base leading-relaxed mb-4">
                These assessments delve into assessing a person's understanding of key OOP concepts such as encapsulation, inheritance, polymorphism, and abstraction.
              </p>
              <a href="https://www.interviewbit.com/oops-mcq/" className="text-blue-500 hover:no-underline inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg overflow-hidden bg-gray-100">
              <img
                alt="DBMS"
                className="object-cover object-center h-64 w-full"
                src={dbms}
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-medium title-font text-black mt-5 mb-3">
                Database Management System
              </h2>
              <p className="text-base leading-relaxed mb-4">
                A database management system (DBMS) is a software suite designed to efficiently store, manage, and retrieve data in a structured manner.
              </p>
              <a href="https://www.geeksforgeeks.org/introduction-of-dbms-database-management-system-set-1/" className="text-blue-500 hover:no-underline inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg overflow-hidden bg-gray-100">
              <img
                alt="Coding"
                className="object-cover object-center h-64 w-full"
                src={coding}
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-medium title-font text-black mt-5 mb-3">
                Coding Question 
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Coding practice involves exercises and challenges designed to enhance a person's programming skills, problem-solving abilities, and understanding of programming concepts.
              </p>
              <a href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" className="text-blue-500 hover:no-underline inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg overflow-hidden bg-gray-100">
              <img
                alt="Aptitude"
                className="object-cover object-center h-64 w-full"
                src={aptitude}
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-medium title-font text-black mt-5 mb-3">
                Aptitude
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Aptitude tests are assessments designed to evaluate a person's cognitive abilities, problem-solving skills, and numerical reasoning.
              </p>
              <a href="https://mcqquestions.net/aptitude" className="text-blue-500 hover:no-underline inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          {/* Repeat this card structure for additional resources */}
        </div>
      </div>
    </section>
  );
}

Resources.defaultProps = {
  theme: 'indigo'
};

Resources.propTypes = {
  theme: PropTypes.string.isRequired
};

export default Resources;
