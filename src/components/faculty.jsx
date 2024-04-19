import React from "react";
// import { Link } from 'react-router-dom';
import sir from '../assets/images/faculty.jpg';
// import prat from '../assets/images/profile.jpg';
import atha from '../assets/images/fac3.jpg';
import fac from '../assets/images/Faculty1.png'

function Faculty() {

    return (

        <div class="min-h-screen flex items-center justify-center text-center w-[100%]">
            <div class="flex flex-col items-center justify-center rounded-tr-full rounded-bl-full w-full bg-white">
                <div class="flex flex-col p-4 m-2 w-full">
                    <div class="text-xl md:text-3xl font-medium">Faculty Committee</div>

                    <div
                        class="flex items-center justify-center md:flex-row flex-col space-x-4 space-y-4 p-2"
                    >
                        <div
                            class="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4"
                        >
                            <div
                                class="h-40 w-40 border-2 border-green-800 rounded-full overflow-hidden bg-gray-200"
                            >
                                <img
                                    src={sir}
                                    alt=""
                                    class=""
                                />
                            </div>

                            <div
                                class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400"
                            >
                                Sachin Pande
                            </div>
                            {/* <div class="italic text-gray-800 text-sm">Backend Developer</div> */}
                            <div class="flex my-2">
                                <a
                                    href="#"
                                    class="w-9 h-9 rounded-full border-green-800 border text-stone-800 hover:bg-green-800 hover:text-white mx-1 pt-1 inline-block"
                                ><i class="fa fa-twitter"></i
                                ></a>
                                <a
                                    href="#"
                                    class="w-9 h-9 rounded-full border-green-800 border text-stone-800 hover:bg-green-800 hover:text-white mx-1 pt-1 inline-block"
                                ><i class="fa fa-instagram"></i
                                ></a>
                                <a
                                    href="#"
                                    class="w-9 h-9 rounded-full border-green-800 border text-stone-800 hover:bg-green-800 hover:text-white mx-1 pt-1 inline-block"
                                ><i class="fa fa-facebook"></i
                                ></a>
                                <a
                                    href="#"
                                    class="w-9 h-9 rounded-full border-green-800 border text-stone-800 hover:bg-green-800 hover:text-white mx-1 pt-1 inline-block"
                                ><i class="fa fa-linkedin"></i
                                ></a>
                            </div>
                        </div>
                        <div
                            class="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4"
                        >
                            <div
                                class="h-40 w-40 border-2 border-green-800 rounded-full overflow-hidden bg-gray-200"
                            >
                                <img
                                    src={fac}
                                    alt=""
                                    class=""
                                />
                            </div>

                            <div
                                class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400"
                            >
                                Vinit Tribhuvan
                            </div>
                            {/* <div class="italic text-gray-800 text-sm">Frontend Developer</div> */}
                            <div class="flex my-2">
                                <a
                                    href="#"
                                    class="w-9 h-9 rounded-full border-green-800 border text-stone-800 hover:bg-green-800 hover:text-white mx-1 pt-1 inline-block"
                                ><i class="fa fa-twitter"></i
                                ></a>
                                <a
                                    href="#"
                                    class="w-9 h-9 rounded-full border-green-800 border text-stone-800 hover:bg-green-800 hover:text-white mx-1 pt-1 inline-block"
                                ><i class="fa fa-instagram"></i
                                ></a>
                                <a
                                    href="#"
                                    class="w-9 h-9 rounded-full border-green-800 border text-stone-800 hover:bg-green-800 hover:text-white mx-1 pt-1 inline-block"
                                ><i class="fa fa-facebook"></i
                                ></a>
                                <a
                                    href="#"
                                    class="w-9 h-9 rounded-full border-green-800 border text-stone-800 hover:bg-green-800 hover:text-white mx-1 pt-1 inline-block"
                                ><i class="fa fa-linkedin"></i
                                ></a>
                            </div>
                        </div>
                        <div
                            class="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4"
                        >
                            <div
                                class="h-40 w-40 border-2 border-green-800 rounded-full overflow-hidden bg-gray-200"
                            >
                                <img
                                    src={atha}
                                    alt=""
                                    class=""
                                />
                            </div>

                            <div
                                class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400"
                            >
                                Amruta Awati
                            </div>
                            {/* <div class="italic text-gray-800 text-sm">Frontend Developer</div> */}
                            <div class="flex my-2">
                                <a
                                    href="#"
                                    class="w-9 h-9 rounded-full border-green-800 border text-stone-800 hover:bg-green-800 hover:text-white mx-1 pt-1 inline-block"
                                ><i class="fa fa-twitter"></i
                                ></a>
                                <a
                                    href="#"
                                    class="w-9 h-9 rounded-full border-green-800 border text-stone-800 hover:bg-green-800 hover:text-white mx-1 pt-1 inline-block"
                                ><i class="fa fa-instagram"></i
                                ></a>
                                <a
                                    href="#"
                                    class="w-9 h-9 rounded-full border-green-800 border text-stone-800 hover:bg-green-800 hover:text-white mx-1 pt-1 inline-block"
                                ><i class="fa fa-facebook"></i
                                ></a>
                                <a
                                    href="#"
                                    class="w-9 h-9 rounded-full border-green-800 border text-stone-800 hover:bg-green-800 hover:text-white mx-1 pt-1 inline-block"
                                ><i class="fa fa-linkedin"></i
                                ></a>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Faculty;
