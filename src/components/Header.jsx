import { useState } from "react";
import logo from "../../images/applogo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [chageButton, setChangeButton] = useState(false);
  const toggleButton = () => {
    setChangeButton(!chageButton);
  };

  return (
    <div className="Header flex justify-center items-center gap-20 px-3">
      <div className="logo_container">
        <img src={logo} height={"200px"} width={"200px"} />
      </div>
      <h1 className="text-6xl font-fontcustom">
        <span className="text-orange-500">Grub</span>
        <span className="text-red-600">Dash</span>
      </h1>
      <div className="nav-items">
        <ul className="flex gap-4">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={toggleButton}
            className="text-white hover:bg-slate-800 bg-slate-600 border-2 border-solid border-gray-700"
          >
            log{chageButton ? "out" : "in"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
