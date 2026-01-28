export default function Navbar() {
  return (
    <nav className="text-inherit text-xl font-bold fixed top-0 left-0 w-full z-50 shadow-md">
     <div className="max-w-x8l mx-auto px-6 py-4 flex justify-between ">

        <h1 className="text-4xl font-bold text-white">potfolio</h1>
        <div className="flex space-x-8 text-white">
            <a href="/"className="hover:text-blue-400">Home</a>
            <a href="#projects"className="hover:text-blue-400">Projects</a>
            <a href="#contact"className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}
