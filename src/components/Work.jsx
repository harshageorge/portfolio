import React from "react";
import EcommerceImage from "../assets/ecommerce.jpeg";

const Work = () => {
  return (
    <div name="works" className="w-full h-screen text-gray-300 bg-gradient-to-r from-blue-500 via-[#3b13ab] to-[#280c75]">
      <div className="mx-auto p-4 flex flex-col justify-center h-full  max-w-[300px] md:max-w-[1000px]">
        <div className="p-6">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 text-gray-300  border-gray-500 ">
            Works
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-2 md:gap-8">
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center mx-auto  p-4  hover:scale-105 duration-500"
          >
            <div >
              <span className="text-sm md:text-3xl font-bold py-4">Ecommerce App</span>
              <p className=" md:hidden text-xs  mb-2 leading-normal text-gray-300 py-4">
              An online store application using React and Material UI.
              </p>
              <p className="hidden md:block text-l mb-2 leading-normal text-gray-300 py-4">
                An online store application with add to cart and remove from
                cart features. Developed using React and Material UI.
              </p>
              <div className="flex justify-around">
                <a href="https://ecommerce-2-responsive-harshageorge.vercel.app/">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Demo
                  </button>
                </a>
                <a href="https://github.com/harshageorge/ecommerce-2-responsive">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xs md:text-sm  px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center mx-auto content-div p-4  hover:scale-105 duration-500"
          >
            <div>
              <span className="text-sm md:text-3xl font-bold md:py-4 py-1">Todo App</span>
              <p className=" md:hidden text-xs  mb-2 leading-normal text-gray-300 py-4">
              A To Do application using React and Bootstrap.
              </p>
              <p className="hidden md:block text-l mb-2 leading-normal text-gray-300 py-4">
              A To Do application that can add, edit and delete todo's. Developed using React and Bootstrap.
              </p>
              <div className="flex justify-around">
                <a href="https://todo-list-react-umber.vercel.app/">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xs md:text-sm  px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Demo
                  </button>
                </a>
                <a href="https://github.com/harshageorge/todo_list_react">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xs md:text-sm  px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Code
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
