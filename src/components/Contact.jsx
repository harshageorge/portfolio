import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen text-gray-900 bg-[#ecebf0]"
    >
      <div className="max-w-[370px]  md:max-w-[1000px] mx-auto  pl-5 pr-5 pt-10 pb-5 md:p-6 flex flex-col justify-center gap-y-2 h-full">
        <div className="pt-10 pb-2">
          <p className="text-2xl md:text-4xl font-bold border-b-4 inline border-[#141a4f] text-[#280c75]">
            Contact
          </p>
        </div>
        <form
          method="POST"
          action="https://getform.io/f/02335065-c14f-41d7-b925-a21405f4545f"
          className="flex flex-col max-w-[600px] w-full"
        >
          <input
            className="bg-blue-200 p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-blue-200 "
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-blue-200  p-2"
            name="message"
            rows="8"
            placeholder="Message"
          ></textarea>
          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4
           focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
