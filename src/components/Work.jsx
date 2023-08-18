import React from "react";
import EcommerceImage from "../assets/online_store.png";
import ToDoImage from "../assets/todo_image.png";
import Visualisation from "../assets/data_visualisation.png";
// import Portfolio from  '../assets/portfolio_img.png';
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

        <div className="grid md:grid-cols-2 gap-8">
          <div class="flex items-center justify-center">
            <div class="group h-96 w-full [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img
                    class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src={EcommerceImage}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-blue-500/75 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Online Store</h1>
                    <p className="text-lg pt-2"> React + Material UI</p>
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
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center">
            <div class="group h-96 w-full [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img
                    class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src={Visualisation}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-blue-500/75 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Data Visualisation</h1>
                    <p className="text-lg pt-2">
                      {" "}
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
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center">
            <div class="group h-96 w-full [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img
                    class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src={ToDoImage}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-blue-500/75 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">To Do List</h1>
                    <p className="text-lg pt-2">
                      {" "}
                      React + Bootstrap + NodeJs + MySQL
                    </p>
                    <div className="md:pt-4 p-2 text-center flex flex-row ">
                      <a href="https://github.com/harshageorge/fullstack_todo">
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
              </div>
            </div>
          </div>
          {/* 
          <div class="flex items-center justify-center bg-slate-100">
            <div class="group h-96 w-full [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img
                    class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src={ToDoImage}
                    alt=""
                  />
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold"> To Do List</h1>
                    <p class="text-lg">React + Bootstrap + NodeJs + MySQL</p>
                  
                    <button class="mt-2 rounded-md bg-neutral-800 px-2 py-1 text-sm hover:bg-neutral-900">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="flex items-center justify-center h-auto w-full rounded-xl">
            <div className="group h-full w-full [perspective:1000px]">
              <div className=" h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src={EcommerceImage}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-blue-500/75 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Online Store</h1>
                    <p className="text-lg pt-2"> React + Material UI</p>
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
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Work;
