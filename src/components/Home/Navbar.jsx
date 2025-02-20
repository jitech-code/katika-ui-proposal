import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // État du menu mobile

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Katika wallet", path: "/katika_wallet" },
    { name: "Blog", path: "/blog" },
    { name: "Carrières", path: "/careers" },
    { name: "A propos", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="bg-gray-50 fixed top-0 left-0 right-0 z-50 w-screen py-3 px-5 sm:px-10 flex justify-between items-center shadow-lg">
        {/* LOGO */}
        <div className="">
        <img
          className="cursor-pointer"
          width={70}
          height={70}
          src={`${import.meta.env.BASE_URL}assets/logo/logo.svg`}
          alt="Logo"
        />


        </div>
        
        {/* MENU DESKTOP */}
        <ul className="hidden flex-1 justify-center mt-2 ml-auto gap-12 lg:flex">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={` text-sm font-medium cursor-pointer text-gray transition-all duration-300 ease-in-out hover:text-purple-500 hover:scale-110
                ${location.pathname === item.path 
                  ? "text-purple-500 font-semibold scale-110" 
                  : "text-gray-600 hover:text-purple-500 hover:scale-110"}`}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* BOUTON MENU MOBILE */}

        
        <button
          className="lg:hidden block focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={`${import.meta.env.BASE_URL}assets/menu.svg`} alt="Menu" width={32} height={32} />
        </button>
      </header>

      {/* MENU MOBILE */}
      <div
  className={`fixed top-0 left-0 w-screen h-full bg-white/35 backdrop-blur-[7px] z-40 transform transition-transform duration-300 ease-in-out 
    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
>

        <button
          className="absolute top-5 right-5"
          onClick={() => setIsOpen(false)}
        >
          ❌
        </button>

        <ul className="flex flex-col items-center justify-center h-screen gap-10">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`text-lg font-semibold cursor-pointer transition-all duration-300 ease-in-out 
                ${location.pathname === item.path 
                  ? "text-purple-500" 
                  : "text-gray-800 hover:text-purple-500"}`}
              onClick={() => setIsOpen(false)} // Ferme le menu après clic
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
