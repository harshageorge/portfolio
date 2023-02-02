import React, { useContext } from "react";
import { NavContext } from "./nav-context";
const Experience = () => {
  const { nav } = useContext(NavContext);
  return (
    <div
      name="experience"
      className="w-full h-screen text-gray-300 bg-[#ecebf0]"
    >
      <div className="max-w-[370px]  md:max-w-[1000px] mx-auto pl-10 pr-5 pt-10 pb-5 md:p-10 flex flex-col justify-center h-full">
        <div className="pt-10 md:pb-4 pb-2">
          <p className="text-2xl md:text-4xl  font-bold border-b-4 inline border-[#141a4f] text-[#280c75]">
            Experience
          </p>
        </div>
        {nav ? (
          "hidden"
        ) : (
          <ol class="relative border-l border-gray-200 p-5 dark:border-gray-700">
            <li class="mb-4 ml-2 md:mb-10 md:ml-6">
              <span class="absolute flex items-center justify-center w-4 h-4 md:w-6 md:h-6 bg-blue-100 rounded-full -left-2 md:-left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  ></path>
                </svg>
              </span>
              <h3 class="mb-1 text-sm md:text-lg font-semibold text-gray-900 dark:text-[#141a4f]">
                iCrats Technologies, India
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                06-2021 to 09-2022
              </time>
              <p class=" text-xs md:text-base font-normal text-gray-500 dark:text-[#8892b0]">
                Software Engineer
              </p>
            </li>
            <li class="mb-4 ml-2 md:mb-10 md:ml-6">
              <span class="absolute flex items-center justify-center w-4 h-4 md:w-6 md:h-6 bg-blue-100 rounded-full -left-2 md:-left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  ></path>
                </svg>
              </span>
              <h3 class="flex items-center mb-1 text-sm md:text-lg font-semibold text-gray-900 dark:text-[#141a4f]">
                Luminar Technolab, India
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                01-2021 to 03-2021
              </time>
              <p class="mb-4  text-xs md:text-base font-normal text-gray-500 dark:text-[#8892b0]">
                MEARN stack web development
              </p>
            </li>
            <li class="mb-4 ml-2 md:mb-10 md:ml-6">
              <span class="absolute flex items-center justify-center w-4 h-4 md:w-6 md:h-6 bg-blue-100  rounded-full md:-left-3 -left-2  ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  ></path>
                </svg>
              </span>
              <h3 class="flex items-center mb-1 text-sm md:text-lg font-semibold text-gray-900 dark:text-[#141a4f]">
                Mahatma Gandhi University, India
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2014-2016
              </time>
              <p class="mb-4  text-xs md:text-base font-normal text-gray-500 dark:text-[#8892b0]">
                Master of Technology (VLSI & Embedded systems)
              </p>
            </li>
            <li class="mb-4 ml-2 md:mb-10 md:ml-6">
            <span class="absolute flex items-center justify-center w-4 h-4 md:w-6 md:h-6 bg-blue-100  rounded-full md:-left-3 -left-2  ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  ></path>
                </svg>
              </span>
              <h3 class="flex items-center mb-1 text-sm md:text-lg font-semibold text-gray-900 dark:text-[#141a4f]">
                Mahatma Gandhi University, India
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2010-2014
              </time>
              <p class="mb-4  text-xs md:text-base font-normal text-gray-500 dark:text-[#8892b0]">
                Bachelor of Technology (Electronics and communication)
              </p>
            </li>
          </ol>
        )}
      </div>
    </div>
  );
};

export default Experience;
