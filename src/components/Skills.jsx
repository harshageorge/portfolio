import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import angular from "../assets/angular.png";
import materialui from "../assets/materialui.png";
import nodejs from "../assets/node.png";
import Navbar from "./Navbar";


const Skills = () => {

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-red-400",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: nodejs,
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-300",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },

    {
      id: 8,
      src: angular,
      title: "Angular",
      style: "shadow-red-500",
    },
    {
      id: 9,
      src: materialui,
      title: "Material UI",
      style: "shadow-blue-500",
    },
   
   
  ];

  return (
    <>
    <Navbar />
    <div
      name="skills"
      className='w-full h-screen  text-gray-300 bg-gradient-to-r from-blue-500 via-[#3b13ab] to-[#280c75] '
    >
      <div className="max-w-[1240px] mx-auto px-6 py-16">
        <div className="pt-16 pb-3">
          <p className="text-2xl md:text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
        </div>

        <div className="md:max-w-[900px] grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4 text-center justify-center px-2 py-2  md:px-10 sm:px-0 ">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-1/5 md:w-10 mx-auto xl:w-16 " />
              <p className="text-xs xl:text-xl mt-2 md:mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Skills;
