import logo from "../../images/applogo.png";
const Header = () => {
  return (
    <div className="Header flex justify-between items-center px-3">
      <div className="logo_container">
        <img src={logo} height={"250px"} width={"250px"} />
      </div>
      <h1 className="text-6xl font-fontcustom">
        <span className="text-orange-500">Grub</span>
        <span className="text-red-600">Dash</span>
      </h1>
      <div className="nav-items">
        <ul className="flex gap-4 text-3xl">
          <li className="">Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
