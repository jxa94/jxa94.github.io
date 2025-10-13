import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#e8e8ff] fixed top-0 left-0 w-full shadow-md z-50">
      {/* Logo */}
      <h2 className="text-2xl font-bold">
        <a href="#Home" className="hover:text-gray-600">
          Peter's Home Page
        </a>
      </h2>

      {/* Menu Items */}
      <ul
        className={`md:flex md:items-center md:space-x-6 absolute md:static left-0 w-full md:w-auto bg-[#e8e8ff] md:bg-transparent transition-all duration-300 ease-in-out ${
          menuOpen ? "top-16 opacity-100" : "top-[-400px] opacity-0 md:opacity-100"
        }`}
      >
        <li className="p-3 md:p-0">
          <a href="#About" className="hover:text-gray-600">
            About Me
          </a>
        </li>
        <li className="p-3 md:p-0">
          <a href="#Resume" className="hover:text-gray-600">
            Resume
          </a>
        </li>
        <li className="p-3 md:p-0">
          <a href="#Education" className="hover:text-gray-600">
            Education
          </a>
        </li>

        {/* Dropdown */}
        <li className="relative group p-3 md:p-0">
          <a href="#Hoby" className="hover:text-gray-600 flex items-center">
            Hobby ▾
          </a>
          <ul className="absolute left-0 top-8 hidden group-hover:block bg-white shadow-md rounded-md">
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#Anime">Anime</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#Game">Gaming</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#Music">Music</a>
            </li>
          </ul>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden md:flex space-x-4">
        <a href="https://github.com/jxa94">
          <img src="/image/giticon.png" alt="GitIcon" className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com/in/xu-peter-a60782313/">
          <img src="/image/linkedinicon.png" alt="LinkedinIcon" className="w-8 h-8" />
        </a>
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
    </nav>
  );
}
