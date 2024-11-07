import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/applogo.png";
import rest1 from "./images/rest1-image.jpeg";
import star from "./images/star.jpg";
import pancake from "./images/pancake.jpg";

const restaurantData = [
  {
    ResName: "Rampage Deli",
    Cusine: "Cuisine: American",
    Stars: "4.8",
    img: rest1,
  },
  {
    ResName: "IHOP Pancakes",
    Cusine: "Cuisine: American, Breakfast",
    Stars: "4.2",
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg5MDF8MHwxfGFsbHwyfHx8fHx8fHwxNjE3MzAyNTcy&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    ResName: "Pizza Planet",
    Cusine: "Cuisine: Italian",
    Stars: "4.5",
    img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    ResName: "Sushi World",
    Cusine: "Cuisine: Japanese",
    Stars: "4.7",
    img: "https://plus.unsplash.com/premium_photo-1668143358351-b20146dbcc02?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    ResName: "Taco Town",
    Cusine: "Cuisine: Mexican",
    Stars: "4.3",
    img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    ResName: "Burger Haven",
    Cusine: "Cuisine: American, Fast Food",
    Stars: "4.6",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg5MDF8MHwxfGFsbHw2fHx8fHx8fHwxNjE3MzAyNzA2&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    ResName: "Pasta Palace",
    Cusine: "Cuisine: Italian",
    Stars: "4.4",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    ResName: "Curry Corner",
    Cusine: "Cuisine: Indian",
    Stars: "4.8",
    img: "https://plus.unsplash.com/premium_photo-1669831178095-005ed789250a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    ResName: "Pho Fever",
    Cusine: "Cuisine: Vietnamese",
    Stars: "4.5",
    img: "https://plus.unsplash.com/premium_photo-1664478276162-46c39b3557c3?q=80&w=1356&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    ResName: "BBQ Bliss",
    Cusine: "Cuisine: American, BBQ",
    Stars: "4.6",
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg5MDF8MHwxfGFsbHwxMHx8fHx8fHx8fDE2MTczMDI3OTc&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    ResName: "Mediterranean Delights",
    Cusine: "Cuisine: Mediterranean",
    Stars: "4.7",
    img: "https://images.unsplash.com/photo-1626200725138-453dac7e46ab?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    ResName: "Dim Sum House",
    Cusine: "Cuisine: Chinese",
    Stars: "4.3",
    img: "https://images.unsplash.com/photo-1653045582850-c5b74d34c395?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    ResName: "Falafel Factory",
    Cusine: "Cuisine: Middle Eastern",
    Stars: "4.6",
    img: "https://images.unsplash.com/photo-1701688596783-231b3764ef67?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    ResName: "Vegan Valley",
    Cusine: "Cuisine: Vegan",
    Stars: "4.5",
    img: "https://plus.unsplash.com/premium_photo-1664648063790-ef4670e43d59?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    ResName: "Steakhouse Supreme",
    Cusine: "Cuisine: American, Steakhouse",
    Stars: "4.9",
    img: "https://images.unsplash.com/photo-1504973960431-1c467e159aa4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    ResName: "Bakery Bliss",
    Cusine: "Cuisine: Bakery, Dessert",
    Stars: "4.7",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg5MDF8MHwxfGFsbHwxNnx8fHx8fHx8fDE2MTczMDI5MDA&ixlib=rb-1.2.1&q=80&w=400",
  },
];

/**
 * Website outlook
 * Header
 *  --- Logo
 *  --- Navigation items and Cart
 * Body
 *  --restaurent cards Container
 *    ---Restaurrent cards
 * Footer
 *  --Copyright
 * --Links
 * -- adress
 * --Contact
 *
 */
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

const Restaurents = (props) => {
  const { resdata } = props;
  const { ResName, Cusine, Stars, img } = resdata;
  return (
    <div
      className="
    Restaurent-card flex flex-col gap-3  bg-gray-400
    "
    >
      <div className="w-[250px] h-[200px]">
        <img src={img} className="w-full h-full object-fit" />
      </div>
      <div className="flex flex-row justify-between items-center">
        <h3>{ResName}</h3>
        <div className="flex justify-start items-center">
          <img src={star} height={"40px"} width={"40px"} />
          <p>
            <span>{Stars}</span>
            <span>Stars</span>
          </p>
        </div>
      </div>
      <p>{Cusine}</p>
      <p>ETA : 30mins</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="Body flex flex-col gap-10 px-3 py-5">
      <div className="search_container">
        <form className="flex flex-col justify-center items-center">
          <label className="text-xl">Search for Restaurents</label>
          <input
            type="text"
            className="border-2 border-solid border-gray-700 w-[70%]"
          />
        </form>
      </div>
      <div className="Restaurent-container flex gap-5 flex-wrap ">
        {restaurantData.map((Restaurent, key) => (
          <Restaurents key={key} resdata={Restaurent} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-600 pt-5 flex flex-row justify-center items-center gap-10 font-fontcustom">
      <div>© Copyright 2024 GrubDash</div>
      <p className="uppercase">Adress : 187 Knoxville ave, Peoria, Illonois</p>
      <p>Contact : +1 (897)-563-8765</p>
    </div>
  );
};
const Applayout = () => {
  return (
    <div className="app" id="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
