import { useContext, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../Context";
import { useSelector } from "react-redux";
import { store } from "../Store/store";

export default function NavBar() {
  const { ProfileData, isLoggedIn, setIsLoggedIn } = useContext(ProfileContext);
  const cartItems=useSelector(store=>store.cart.items||[]);
  return (
    <nav className="flex flex-row justify-between sm:flex-row sm:p-5 p-2 items-center h-[80px] sm:h-[50px] w-screen bg-[#295f48] gap-2 sm:justify-between sm:items-center sm:pr-9 ">
      <Link to="/">
        <div className="text-white text-xl font-bold">
          <img
            src="/src/assets/images/94002756560.png"
            className="w-20"
            alt=""
          />
        </div>
      </Link>

      <div className="hidden md:flex space-x-4 items-center">
        <Link to="/home">
          <a className="text-white hover:text-gray-200">Home</a>
        </Link>
        <Link to="/about">
          <a className="text-white hover:text-gray-200">About</a>
        </Link>
        <Link to="/services">
          <a className="text-white hover:text-gray-200">Services</a>
        </Link>
        <Link to="/home">
          <a className="text-white hover:text-gray-200">Contact</a>
        </Link>

        {isLoggedIn ? (
            <>
             <Link to="/cart">
             <a className=" text-white hover:text-gray-200 flex flex-row">
              <p className="rounded-full text-white ">{cartItems.length}</p>
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="2"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 className="feather feather-shopping-cart"
               >
                 <circle cx="9" cy="21" r="1"></circle>
                 <circle cx="20" cy="21" r="1"></circle>
                 <path d="M5 6h16l-1.68 9H6.72L5 6z"></path>
                 <path d="M7 10h2v5H7z"></path>
                 <path d="M13 10h2v5h-2z"></path>
               </svg>
             </a>
           </Link>
          <Link to="/profile">
            <a href="">
              <div className="h-10 w-10 bg-yellow-100 border-2 border-white rounded-full overflow-hidden">
                <img src={ProfileData[0].profilePhoto} alt="" />
              </div>
            </a>
          </Link>
          </>
        ) : (
          <Link to="/login">
            <a className="text-yellow-300" href="/login">
              Login
            </a>
          </Link>
        )}
      </div>
      <div className="md:hidden">
        <button className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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
    </nav>
  );
}
