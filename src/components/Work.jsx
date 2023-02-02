import React from "react";
import EcommerceImage from "../assets/ecommerce.jpg";
import ToDoImage from "../assets/ToDo.jpg";

const Work = () => {
  return (
    <div
      name="works"
      className="w-full h-screen text-gray-300 bg-gradient-to-r from-blue-500 via-[#3b13ab] to-[#280c75]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="p-6">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 text-gray-300  border-gray-500 ">
            Works
          </p>
        </div>
        <div className="grid md:grid-cols-2 l:grid-cols-3 gap-4">
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md md:max-w-[350px] max-w-[220px]
              flex flex-col justify-center mx-auto hover:scale-105 duration-500  w-full bg-gradient-to-r from-blue-500 via-[#3b13ab] to-[#280c75]"
          >
            <div>
              <img
                src={EcommerceImage}
                style={{
                  width: "100%",
                  height: "100%",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                }}
              />
            </div>
            <div className="flex justify-around md:p-8 p-2">
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
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md md:max-w-[350px] max-w-[220px]
              flex flex-col justify-center mx-auto hover:scale-105 duration-500  w-full bg-gradient-to-r from-blue-500 via-[#3b13ab] to-[#280c75]"
          >
            <div>
              <img
                src={ToDoImage}
                style={{
                  width: "100%",
                  height: "100%",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                }}
              />
            </div>
            <div className="flex justify-around md:p-8 p-2">
              <a href="https://todo-list-react-umber.vercel.app/" className="justify-center">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center "
                >
                  Demo
                </button>
              </a>
              <a href="https://github.com/harshageorge/todo_list_react">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xs md:text-sm  px-5 py-2.5 text-center"
                >
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
