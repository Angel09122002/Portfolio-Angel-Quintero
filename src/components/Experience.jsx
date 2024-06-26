import React from "react";
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import sass from "../assets/sass.png";
import tailwind from "../assets/tailwind.png";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
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
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: sass,
      title: "Sass",
      style: "shadow-pink-400",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-r from-violet-300 from-5% via-violet-300 to-white-full h-screen  "
    >
      <div className="max-w-screen-lg mx-auto p-3 flex flex-col justify-center w-full h-full text-black ">
        <div>
          <p className="text-4xl font-bold ">Experience</p>
          <p className="py-6">
            These are the tech stacks I've gained hands-on experience
          </p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-center py-9 px-22 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-3 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
