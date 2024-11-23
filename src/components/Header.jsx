import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
      <nav id="header" className="w-full  bg-black text-white ">
        <div className=" w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="logo-wrapper pl-4 flex items-center ">
            <Link
              to="/"
              className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            ></Link>
            <img
              src={require("../pages/—Pngtree—fast food cooking_4103415.png")}
              alt=""
              className="object-cover h-44"
            />
          </div>
          <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
            <Link to="/" className="text-xl">
              Home
            </Link>
            <Link to="#about" className="text-xl">
              About
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Link to="cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bag-heart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
              </svg>
            </Link>
            <Link to="login">Log In</Link>
            <Link to="register">Sign up</Link>
          </div>
        </div>
      </nav>
    );
}

export default Header