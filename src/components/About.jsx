import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#ecebf0]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-blue-500 from-neutral-300">HI, MY NAME IS</p>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#141a4f]">
          Harsha George
        </h2>
        <h2 className=" sm:text-4xl font-bold text-[#8892b0]">
          I am a Full Stack Developer{" "}
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I like to build amazing responsive web applications. I love exploring
          and creating.{" "}
        </p>
        <div className="flex items-center space-x-3 ">
          <a
            href="https://www.linkedin.com/in/harsha-george/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
          </a>
          <a
            href="https://github.com/harshageorge"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
          </a>
          <a
            href="https://github.com/fireclint"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              onClick={() => (window.location = "mailto:yourmail@domain.com")}
            >
              <AiOutlineMail />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
