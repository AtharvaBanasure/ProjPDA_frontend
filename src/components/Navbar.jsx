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
    <div className="">
      <nav className="w-full bg-white top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
          <div className="flex items-center space-x-3  rtl:space-x-reverse">
            <Link to="/">
              <img src={Logo} className="h-8" alt="Flowbite Logo" />
            </Link>
            <Link to="/">
              <span className="px-2 font-bold text-lg">
                Professional Development Activity
              </span>
            </Link>
          </div>
          <div className="flex md:order-2 gap-[4vw] md:space-x-0 rtl:space-x-reverse">
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
                    className="ml-1 text-white bg-red-700 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Logout
                  </Link>
                </>
              )}
              {!username && (
                <>
                  <Link
                    to="/login"
                    className="text-white bg-green-700 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                type="button"
                className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200`}
                aria-expanded={menuOpen}
              >
                <span className="sr-only">Toggle menu</span>
                {menuOpen ? (
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.293 3.293a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 00-1 1v11a1 1 0 102 0V4a1 1 0 00-1-1zm-1.707-2.707a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L9 4.414l6.293 6.293a1 1 0 001.414-1.414l-7-7z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`${
              menuOpen ? "mt-14 md:mt-0" : "-top-full"
            } nav-links duration-500 md:static md:min-h-fit flex flex-row md:w-auto absolute min-h-[60vh] left-0 w-full  items-center px-5`}
          >
            <ul className="flex flex-col md:flex-row  p-4 space-x-3 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li>
                <div className="flex flex-row">
                  <div className="px-1 mt-1">
                    <IoHomeOutline />
                  </div>
                  <div>
                    <Link
                      to="/"
                      className="block py-2 px-3 text-black bg-[#426B1F] rounded md:bg-transparent md:text-[#426B1F] md:p-0"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <div className=" px-1 mt-1">
                    <BsInfoCircle />
                  </div>
                  <div>
                    <Link
                      to="/about"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#426B1F] md:p-0"
                    >
                      About
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <div className=" px-1 mt-1">
                    <MdOutlineEvent />
                  </div>
                  <Link
                    to="/events"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#426B1F] md:p-0"
                  >
                    Events
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <div className=" px-1 mt-1">
                    <MdOutlineContactPage />
                  </div>
                  <Link
                    to="/contact"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#426B1F] md:p-0"
                  >
                    Contact
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
