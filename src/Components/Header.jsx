import React, { useContext } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import Theme from "./Theme";
import { AuthContext } from "../Providers/AuthProvider";
import { Tooltip } from "react-tooltip";
const Header = () => {
  const { user, signOutHandle } = useContext(AuthContext);
  const navigate = useNavigate()
  const buttons = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allReviews">All Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/addReviews">Add Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/myReview">My Review</NavLink>
      </li>
      <li>
        <NavLink to="/myWatchList">Game WatchList</NavLink>
      </li>
    </>
  );
  const handleSignOut = () => {
    navigate('/')
    signOutHandle()
  }
  const authentications = (
    <>
      <NavLink className="btn mr-2" to="/register">
        Register
      </NavLink>
      <NavLink className="btn mr-2" to="/login">
        Login
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 dark:bg-gray-600">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {buttons}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            CHILL <span>GAMER</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{buttons}</ul>
        </div>
        <div className="navbar-end">
          {user ? (<>
                <img
                  width={60}
                  className="rounded-full border-orange-500 border-2 hover:shadow-2xl"
                  src={user.photoURL}
                  alt=""
                  data-tooltip-id="user-tooltip"
                  data-tooltip-content={`${user?.displayName || "User"}`} 
                />
                <Tooltip id="user-tooltip" place="top" type="dark" effect="solid" />
                <Link className="btn mx-2 text-lg" onClick={handleSignOut}>
                  Logout
                </Link>
                </>
          ) : (
            authentications
          )}
          <a className="btn">
            <Theme></Theme>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
