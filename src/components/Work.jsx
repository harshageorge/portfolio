import React from "react";
import EcommerceImage from "../assets/ecommerce.jpg";
import ToDoImage from "../assets/ToDo.jpg";
import Visualisation from "../assets/visualisation.jpg";
const Work = () => {
  return (
    <div
      name="works"
      className="w-full h-screen text-gray-300 bg-gradient-to-r from-blue-500 via-[#3b13ab] to-[#280c75]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full gap-y-4">
        <div className="pt-16 md:pt-8">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 text-gray-300  border-gray-500 ">
           Projects
          </p>
        </div>
        <div className="grid md:grid-cols-2  md:gap-4 sm:gap-1 gap-2 ">
          <div
            style={{ backgroundImage: `url(${EcommerceImage})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div p-2"
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="md:text-2xl text-xl  font bold text-white  ">
                React + Material UI
              </span>
              <div className="pt-4 p-2 text-center ">
                {/* eslint-disable-next-line */}
                <a href="https://github.com/harshageorge/online-store">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
                {/* eslint-disable-next-line */}
                <a href="https://lighthearted-otter-f4c7dc.netlify.app/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Visualisation})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md
            flex justify-center text-center items-center mx-auto content-div p-2"
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="md:text-2xl text-xl font bold text-white break-words">
                React + Tailwind CSS + Firebase + amCharts
              </span>
              <div className="pt-4 p-2 text-center ">
                {/* eslint-disable-next-line */}
                <a href="https://github.com/harshageorge/data-visualisation">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
                {/* eslint-disable-next-line */}
                <a href="https://data-visualisation-harshageorge.vercel.app/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ToDoImage})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div p-2"
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="md:text-2xl text-xl font bold text-white">
                React + Bootstrap
              </span>
              <div className="pt-4 text-center ">
                {/* eslint-disable-next-line */}
                <a href="https://github.com/harshageorge/todo_list_react">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg "
                  >
                    Code
                  </button>
                </a>
                {/* eslint-disable-next-line */}
                <a href="https://todo-list-react-umber.vercel.app/" className="justify-center">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
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
    // <div name="works" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
    //   <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
    //     <div className="pb-8">
    //       <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
    //         Work
    //       </p>
    //       <p className="py-6">// Check out some of my recent work</p>
    //     </div>

    //     {/* container for projects */}
    //     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
    //       {/* Gird Item */}

    //       <div
    //         style={{ backgroundImage: `url(${Visualisation})` }}
    //         className="shadow-lg shadow-[#040c16] group container rounded-md
    //         flex justify-center text-center items-center mx-auto content-div"
    //       >

    //         {/* Hover effect for images */}
    //         <div className="opacity-0 group-hover:opacity-100 ">
    //           <span className="text-2xl font bold text-white tracking-wider ">
    //             dashboard
    //           </span>
    //           <div className="pt-8 text-center ">
    //             {/* eslint-disable-next-line */}
    //             <a target="_blank">
    //               <button
    //                 className="text-center rounded-lg px-4 py-3 m-2
    //                  bg-white text-gray-700 font-bold text-lg"
    //               >
    //                 Code
    //               </button>
    //             </a>
    //             {/* eslint-disable-next-line */}
    //             <a target="_blank">
    //               <button
    //                 className="text-center rounded-lg px-4 py-3 m-2
    //                  bg-white text-gray-700 font-bold text-lg"
    //               >
    //                 Live
    //               </button>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Work;
