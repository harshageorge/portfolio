import React, { useContext } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import Pdf from "../Resume.pdf";
import { Link } from "react-scroll";
import { NavContext } from "./nav-context";

const Navbar = () => {
  const { nav, setNav } = useContext(NavContext);
  return (
    <div className="fixed z-10 w-full h-20 px-4 flex justify-between md:justify-between items-center bg-gradient-to-r from-blue-500 via-[#3b13ab] to-[#280c75]  text-gray-300">
      <div>
        <Link to="about" smooth={true} duration={500}>
          <img src={Logo} alt="Logo Image" style={{ width: "60px" }} />
        </Link>
      </div>
      <div className="hidden md:flex ">
        <ul className="hidden md:flex items-center">
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="works" smooth={true} duration={500}>
              Works
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          <a href={Pdf} target="_blank">
            My CV
          </a>
        </button>
      </div>
      <div className="md:hidden z-10 flex items-center space-x-3">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          <a href={Pdf} target="_blank">
            My CV
          </a>
        </button>
        {!nav ? (
          <FaBars size={27} onClick={() => setNav(!nav)} />
        ) : (
          <FaTimes size={27} onClick={() => setNav(!nav)} />
        )}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#150345] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-xl ">
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setNav(!nav)}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-xl">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => setNav(!nav)}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-xl">
          <Link
            to="experience"
            smooth={true}
            duration={500}
            onClick={() => setNav(!nav)}
          >
            Experience
          </Link>
        </li>
        <li className="py-6 text-xl">
          <Link
            to="works"
            smooth={true}
            duration={500}
            onClick={() => setNav(!nav)}
          >
            Works
          </Link>
        </li>
        <li className="py-6 text-xl">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setNav(!nav)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
