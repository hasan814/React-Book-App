const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md rounded-br-lg rounded-bl-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/">BookApp</a>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="/"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
