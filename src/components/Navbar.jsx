import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/images/PDA_Logo_trsp.png";
import { Link } from "react-router-dom";
import { MdOutlineEvent } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineContactPage } from "react-icons/md";
import { UserContext } from "../UserContext";

function Navbar() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/profile`, {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  function logout() {
    fetch(`${process.env.REACT_APP_API_URL}/logout`, {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <nav className="bg-white mb-2 w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between  p-4 ">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-base md:text-2xl whitespace-nowrap font-bold">Professional Development Activity</span>

        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <div>
              {username && (
                <>
                  <Link
                    to="/createPost"
                    className="text-white bg-green-700 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Create new post
                  </Link>
                  <Link
                    onClick={logout}
                    className="ml-1 text-white order-last bg-red-700 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Logout
                  </Link>
                </>
              )}
              {!username && (
                <>
                  <Link
                    to="/login"
                    className="text-white order-last bg-green-700 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse  md:mt-0 md:border-0   ">

            <li>
              <div className="flex flex-row ">
                <div className="py-1 px-1">
              <IoHomeOutline />
              </div>
            <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
            </div>
            </li>

            <li>
            <div className="flex flex-row ">
                <div className="py-1 px-1">
              <BsInfoCircle/>
              </div>
              <Link to="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
            </div>
            </li>
            <li>
            <div className="flex flex-row ">
                <div className="py-1 px-1">
              <MdOutlineEvent/>
              </div>
              <Link to="/events" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Events</Link>
              </div>
            </li>
            <li>
            <div className="flex flex-row ">
                <div className="py-1 px-1">
              <MdOutlineContactPage/>
              </div>
              <Link to="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
