import React, { useState } from 'react';
import PropTypes from 'prop-types';
import aptitude from "../assets/images/aptitude1.webp";
// import coding  from "../assets/images/coding1.webp";
import oop  from "../assets/images/oop.png";
// import dbms  from "../assets/images/dbms.jpeg";

function Resources(props) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const years = [
    {
      year: '1st Year',
      courses: [
        { name: 'C', link: 'https://data-flair.training/courses/free-c-programming-course-hindi/' },
        { name: 'C++', link: 'https://data-flair.training/courses/free-cpp-course-hindi/' },
        { name: 'DSA', link: 'https://data-flair.training/courses/data-structures-and-algorithms/' },
        { name: 'Python', link: 'https://data-flair.training/courses/free-python-course-hindi/' }
      ]
    },
    {
      year: '2nd Year',
      courses: [
        { name: 'Java', link: 'https://data-flair.training/courses/free-java-course-hindi/' },
        { name: 'Web Development with HTML CSS JS', link: 'https://data-flair.training/courses/free-web-development-course-hindi/' },
        { name: 'DBMS', link: 'https://data-flair.training/courses/free-sql-course-hindi/' },
        { name: 'Django (optional)', link: 'https://data-flair.training/courses/free-python-django-course-hindi/' }
      ]
    },
    {
      year: '3rd Year',
      courses: [
        { name: 'Advanced Java', link: 'https://data-flair.training/courses/free-advanced-java-course-hindi/' },
        { name: 'JSP', link: 'https://data-flair.training/courses/free-jsp-course-hindi/' },
        { name: 'Servlets', link: 'https://data-flair.training/courses/free-servlet-course-hindi/' },
        { name: 'Hibernate', link: 'https://data-flair.training/courses/free-java-hibernate-course-hindi/' },
        { name: 'Spring', link: 'https://data-flair.training/courses/free-java-spring-framework-course-hindi/' },
        { name: 'Matplotlib', link: 'https://data-flair.training/courses/free-matplotlib-course-hindi/' },
        { name: 'NumPy', link: 'https://data-flair.training/courses/free-numpy-course-hindi/' },
        { name: 'OpenCV', link: 'https://data-flair.training/courses/free-opencv-computer-vision-course-hindi/' },
        { name: 'Pandas', link: 'https://data-flair.training/courses/free-python-pandas-course-hindi/' }
      ]
    },
    {
      year: '4th Year',
      courses: [
        { name: 'Big Data - Hadoop', link: 'https://data-flair.training/courses/free-big-data-hadoop-course/' },
        { name: 'Apache Spark', link: 'https://data-flair.training/courses/free-spark-scala-course/' },
        { name: 'Kafka', link: 'https://data-flair.training/courses/free-kafka-course/' },
        { name: 'Machine Learning', link: 'https://data-flair.training/courses/machine-learning-course-hindi/' }
      ]
    }
  ];

  return (
    <div className="max-w-screen-lg mx-auto mt-4 mb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-1 border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-200 px-4 py-2">
            <h2 className="text-lg font-semibold">Years & Courses</h2>
          </div>
          <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 250px)' }}>
            {years.map((year, index) => (
              <div key={index} className="border-b border-gray-200">
                <div
                  className="flex items-center justify-between px-4 py-3 cursor-pointer transition duration-300 ease-in-out transform hover:bg-gray-300"
                  onClick={() => toggleAccordion(index)}
                >
                  <h2 className="text-lg font-semibold">{year.year}</h2>
                  <svg
                    className={`w-6 h-6 transition-transform transform ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                {activeIndex === index && (
                  <div className="p-4">
                    <ul>
                      {year.courses.map((course, i) => (
                        <li key={i}>
                          <a href={course.link} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-blue-500 hover:bg-gray-300 hover:text-blue-700 rounded-md transition duration-300 ease-in-out">{course.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-1 space-y-6">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <img
              alt="Object Oriented Programming"
              className="object-cover object-center w-full h-64"
              src={oop}
            />
            <div className="p-4">
              <h2 className="text-xl font-medium mb-3">Object Oriented Programming</h2>
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
          {/* <div className="border border-gray-200 rounded-lg overflow-hidden">
            <img
              alt="DBMS"
              className="object-cover object-center w-full h-64"
              src={dbms}
            />
            <div className="p-4">
              <h2 className="text-xl font-medium mb-3">Database Management System</h2>
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
          </div> */}
          {/* <div className="border border-gray-200 rounded-lg overflow-hidden">
            <img
              alt="Coding"
              className="object-cover object-center w-full h-64"
              src={coding}
            />
            <div className="p-4">
              <h2 className="text-xl font-medium mb-3">Coding Question</h2>
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
          </div> */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <img
              alt="Aptitude"
              className="object-cover object-center w-full h-64"
              src={aptitude}
            />
            <div className="p-4">
              <h2 className="text-xl font-medium mb-3">Aptitude</h2>
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
        </div>
      </div>
    </div>
  );
}

Resources.defaultProps = {
  theme: 'indigo'
};

Resources.propTypes = {
  theme: PropTypes.string.isRequired
};

export default Resources;
