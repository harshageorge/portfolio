import React from "react";
import EcommerceImage from "../assets/online_store.png";
import ToDoImage from "../assets/todo_image.png";
import Visualisation from "../assets/data_visualisation.png";
import Portfolio from  '../assets/portfolio_img.png';
const Work = () => {
  return (
    <div
      name="works"
      className="w-full  text-gray-300 bg-gradient-to-r from-blue-500 via-[#3b13ab] to-[#280c75]"
    >
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <div className="pt-16 pb-3">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 text-gray-300  border-gray-500 ">
            Projects
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 ">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <img
              className="rounded-xl group-hover:opacity-10"
              src={EcommerceImage}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-2">
              <h3 className="md:text-2xl text-xl text-white tracking-wider text-center">
                Online Store
              </h3>
              <p className="md:pb-4 pt-2 text-white text-center">
                React + Material UI
              </p>
              <div className="md:pt-4 p-2 text-center flex flex-row ">
                <a href="https://github.com/harshageorge/online-store">
                  <button
                    className="text-center rounded-lg md:px-4 md:py-3 md:m-2 px-2 py-1 m-1
               bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>

                <a href="https://lighthearted-otter-f4c7dc.netlify.app/">
                  <button
                    className="text-center rounded-lg md:px-4 md:py-3 md:m-2 px-2 py-1 m-1
               bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <img
              className="rounded-xl group-hover:opacity-10"
              src={Visualisation}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-2">
              <h3 className="md:text-2xl text-xl text-white tracking-wider text-center">
                Data Visualisation
              </h3>
              <p className="md:pb-4 pt-2 text-white text-center">
                React + Tailwind CSS + Firebase + amCharts
              </p>
              <div className="md:pt-4 p-2 text-center flex flex-row ">
                <a href="https://github.com/harshageorge/data-visualisation">
                  <button
                    className="text-center rounded-lg md:px-4 md:py-3 md:m-2 px-2 py-1 m-1
               bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>

                <a href="https://data-visualisation-harshageorge.vercel.app/">
                  <button
                    className="text-center rounded-lg md:px-4 md:py-3 md:m-2 px-2 py-1 m-1
               bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <img
              className="rounded-xl group-hover:opacity-10"
              src={ToDoImage}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="md:text-2xl text-xl text-white tracking-wider text-center">
                To Do List
              </h3>
              <p className="md:pb-4 pt-2 text-white text-center">
                React + Bootstrap
              </p>
              <div className="md:pt-4 p-2 text-center flex flex-row">
                <a href="https://github.com/harshageorge/todo_list_react">
                  <button
                    className="text-center rounded-lg md:px-4 md:py-3 md:m-2 px-2 py-1 m-1
               bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>

                <a href="https://todo-list-react-umber.vercel.app">
                  <button
                    className="text-center rounded-lg md:px-4 md:py-3 md:m-2 px-2 py-1 m-1
               bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <img
              className="rounded-xl group-hover:opacity-10"
              src={Portfolio}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="md:text-2xl text-xl text-white tracking-wider text-center">
               Portfolio Website
              </h3>
              <p className="md:pb-4 pt-2 text-white text-center">
                React + Tailwind
              </p>
              <div className="md:pt-4 p-2 text-center flex flex-row">
                <a href="https://github.com/harshageorge/portfolio">
                  <button
                    className="text-center rounded-lg md:px-4 md:py-3 md:m-2 px-2 py-1 m-1
               bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>

                <a href="https://portfolio-harshageorge.vercel.app/">
                  <button
                    className="text-center rounded-lg md:px-4 md:py-3 md:m-2 px-2 py-1 m-1
               bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
