import { useContext, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../Context";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../Store/store";
import { toggleNav } from "../Store/NavSlice";

export default function NavBar() {
  const isOpen = useSelector((store) => store.nav.isOpen);
  const dispatch = useDispatch();
  const {
    ProfileData,
    isLoggedIn,
    setIsLoggedIn,
    loginButtonClicked,
    setLoginButtonClicked,
  } = useContext(ProfileContext);
  const cartItems = useSelector((store) => store.cart.items || []);

  function toggleSideBar(e) {
    dispatch(toggleNav());
  }

  return (
    <>
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

        <div className={"hidden md:flex space-x-4 items-center"}>
          <Link to="/home">
            <a className="text-white hover:text-gray-200">Home</a>
          </Link>
          <Link to="/about">
            <a className="text-white hover:text-gray-200">About</a>
          </Link>
          <Link to="/services">
            <a className="text-white hover:text-gray-200">Services</a>
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

        <div className="md:hidden z-70">
          <button
            onClick={toggleSideBar}
            className="text-white focus:outline-none"
          >
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
      {isOpen ? (
        <div className="md:hidden  h-screen w-fit  z-30 fixed top-0 bg-[#2e7456] flex flex-col shadow-lg shadow-[#51816c] right-0  p-4 gap-4 ">
         <div className={` ${isLoggedIn?"flex justify-between":"flex flex-row-reverse"} p-3`}>
         {isLoggedIn?(
          <Link
          onClick={() => {
            setTimeout(() => {
              toggleSideBar();
            }, 200);
          }}
          to="/profile"
        >
          <a href="">
            <div className="h-12 w-12 bg-yellow-100 border-2 border-white rounded-full overflow-hidden">
              <img src={ProfileData[0].profilePhoto} alt="" />
            </div>
          </a>
        </Link>
         ):null}
              
          <div className="md:hidden z-70 self-end mb-7">
            <button
              onClick={toggleSideBar}
              className="text-white focus:outline-none"
            >
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
          </div>
          {isLoggedIn ? (
            <>
            <div className=" h-[3.5em] flex items-center p-2 bg-[#428969] w-fit min-w-[10em] rounded-lg">
              <Link
                to="/cart"
                onClick={() => {
                  setTimeout(() => {
                    toggleSideBar();
                  }, 200);
                }}
              >
                <a className=" text-white hover:text-gray-200 flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
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
                  <p className="rounded-full ml-2 mb-1 text-white text-[2em] ">{cartItems.length}</p>

                </a>
              </Link>
              </div>
            </>
          ) : (
            <Link
              onClick={() => {
                setTimeout(() => {
                  toggleSideBar();
                }, 200);
              }}
              to="/login"
            >
              <div className=" w-fit min-w-[10em] h-[3.5em] bg-[#428969] rounded-lg flex items-center p-5">
                <a className="text-yellow-300 text-[20px]" href="/login">
                  Login
                </a>
              </div>
            </Link>
          )}
          <div className="  h-[3.5em] flex items-center p-2 bg-[#428969] w-fit min-w-[10em] rounded-lg">
            <Link onClick={() => {
                  setTimeout(() => {
                    toggleSideBar();
                  }, 200);
                }} to="/home">
              <a className="text-white  text-[20px]  hover:text-gray-200 ">Home</a>
            </Link>
          </div>
          <div className="  h-[3.5em] flex items-center p-2 bg-[#428969] w-fit min-w-[10em] rounded-lg">
            <Link onClick={() => {
                  setTimeout(() => {
                    toggleSideBar();
                  }, 200);
                }} to="/about">
              <a className="text-white text-[20px]  hover:text-gray-200">About</a>
            </Link>
          </div>
          <div className="  h-[3.5em] flex items-center p-2 bg-[#428969] w-fit min-w-[10em] rounded-lg">
            {" "}
            <Link onClick={() => {
                  setTimeout(() => {
                    toggleSideBar();
                  }, 200);
                }} to="/services">
              <a className="text-white text-[20px]  hover:text-gray-200">Services</a>
            </Link>
          </div>
         
        </div>
      ) : null}
    </>
  );
}
