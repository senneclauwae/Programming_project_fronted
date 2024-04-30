import React, { useState, useRef, useEffect } from 'react';
import ehbLogo from "../assets/ehb-logo.jpg";
import { IoIosMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";


const NavBar = () => {

  // For clicking inside and outside of the box --->>
  const [clicked, setClicked] = useState(false);
  const node = useRef();

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click 
    setClicked(false);
  };

  useEffect(() => {
    if (clicked) {
      // add when mounted
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // return function to be called when unmounted
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      // cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clicked]);

  const handleButtonClick = () => {
    setClicked(!clicked);
  }
  //<<--

  return (
  <>
    <nav className="border flex items-center gap-7 flex-grow">
      <a href="/">
        <header className="flex w-max h-20 gap-x-3 items-center ">
          <img
            src={ehbLogo}
            alt="ehb Logo"
            className="h-full ml-2 items-center object-cover flex"
          />
          <div className="flex border h-12 border-red-500"></div>
          <h1 className="flex flex-col -space-y-8">
            <span className="text-2xl text-red-500">Medialab</span>
            <br />
            <span className="text-xs text-Lichtgrijs}">Uitleendienst</span>
          </h1>
        </header>
      </a>

      {/* Categorie button + pop up */}
      <div className="relative" ref={node}>
        <button onClick={handleButtonClick}>
          <IoIosMenu className="flex h-full size-12 rounded-md text-black hover:bg-gray-200 p-2" />
          {clicked && (
            <div className="origin-top-right absolute -right-1/2 transform translate-x-1/2 mt-4 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-center">
              <h3 className='text-lg'>Categoriën</h3>
              <ul>
                <li className='hover:bg-blue-500 hover:text-white'>Audio</li>
                <li className='hover:bg-blue-500 hover:text-white'>Video</li>
                <li className='hover:bg-blue-500 hover:text-white'>XR</li>
                <li className='hover:bg-blue-500 hover:text-white'>Tools</li>
                <li className='hover:bg-blue-500 hover:text-white'>Belichting</li>
                <li className='hover:bg-blue-500 hover:text-white'>Varia</li>
              </ul>
            </div>
          )}
        </button>
      </div>
      
      <div className="flex">
        <div className="flex flex-grown h-12 border items-center gap-1 mr-5">
          <IoSearchOutline className="size-8 rounded-md text-black hover:bg-gray-200 p-1 ml-2" />
          <input
            type="search"
            name="search-bar"
            id=""
            placeholder="Zoek hier..."
            className="h-full w-full  rounded-lg border-Lichtgrijs p-2 text-black"
          />
        </div>
        <FaUser className="flex h-full size-12 rounded-md text-black hover:bg-gray-200 p-2" />
        <FaShoppingCart className="flex h-full size-12 rounded-md text-black hover:bg-gray-200 p-2 mx-5" />
      </div>
    </nav>
  </>
  );
};

export default NavBar;

// test
