export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white fixed top-0 left-0 right-0 z-50">
      <h2 className="text-xl font-bold">
        <a href="#Home">Peter's Home Page</a>
      </h2>
      <ul className="flex gap-6">
        <li><a href="#About" className="hover:text-gray-300">About Me</a></li>
        <li><a href="#Resume" className="hover:text-gray-300">Resume</a></li>
        <li><a href="#Education" className="hover:text-gray-300">Education</a></li>
        <li><a href="#Hoby" className="hover:text-gray-300">Hobby</a></li>
      </ul>
      <div className="flex gap-2">
        <a href="https://github.com/jxa94">
          <img src="/image/giticon.png" alt="GitIcon" className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/xu-peter-a60782313/">
          <img src="/image/linkedinicon.png" alt="LinkedinIcon" className="w-6 h-6" />
        </a>
      </div>
    </nav>
  )
}
