import { useState } from "react";
import logo from "../../images/applogo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [chageButton, setChangeButton] = useState(false);
  const toggleButton = () => {
    setChangeButton(!chageButton);
  };

  return (
    <div className="Header bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="logo_container flex items-center">
          <img
            src={logo}
            alt="GrubDash Logo"
            className="h-16 w-16 sm:h-20 sm:w-20"
          />
          <h1 className="font-fontcustom text-3xl sm:text-5xl font-bold ml-3">
            <span className="text-orange-200">Grub</span>
            <span className="text-yellow-100">Dash</span>
          </h1>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-items hidden md:flex">
          <ul className="flex gap-6 text-lg font-medium text-white">
            <li>
              <Link
                to="/"
                className="hover:text-gray-200 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-200 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-200 transition duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/grocery"
                className="hover:text-gray-200 transition duration-300"
              >
                Grocery
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="hover:text-gray-200 transition duration-300"
              >
                Cart
              </Link>
            </li>
          </ul>
        </nav>

        {/* Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleButton}
            className="text-sm sm:text-md px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 border border-gray-600 transition duration-300"
          >
            {chageButton ? "Logout" : "Login"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden block text-white focus:outline-none"
            onClick={() => alert("Add mobile menu toggle functionality!")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden bg-orange-600 text-white py-4 px-6">
        <ul className="space-y-4 text-lg">
          <li>
            <Link to="/" className="block hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="block hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="block hover:text-gray-300">
              Grocery
            </Link>
          </li>
          <li>
            <Link to="/cart" className="block hover:text-gray-300">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
