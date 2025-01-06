import React, { useContext } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import Theme from "./Theme";
import { AuthContext } from "../Providers/AuthProvider";
import { Tooltip } from "react-tooltip";
const Header = () => {
  const { user, signOutHandle } = useContext(AuthContext);
  const navigate = useNavigate();
  const buttons = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold border-b-4 border-blue-900 hover:bg-blue-300 bg-blue-500"
              : "dark:text-white"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold border-b-4 border-blue-900 hover:bg-blue-300 bg-blue-500"
              : "dark:text-white"
          }
          to="/allReviews"
        >
          All Reviews
        </NavLink>
      </li>
      {user ? (
        <>
          {" "}
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold border-b-4 border-blue-900 hover:bg-blue-300 bg-blue-500"
                  : "dark:text-white"
              }
              to="/addReviews"
            >
              Add Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold border-b-4 border-blue-900 hover:bg-blue-300 bg-blue-500"
                  : "dark:text-white"
              }
              to="/myReview"
            >
              My Review
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold border-b-4 border-blue-900 hover:bg-blue-300 bg-blue-500"
                  : "dark:text-white"
              }
              to="/myWatchList"
            >
              Game WatchList
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );
  const handleSignOut = () => {
    navigate("/");
    signOutHandle();
  };
  const authentications = (
    <>
      <NavLink
        className="btn mr-2 bg-blue-500 text-white border-slate-500 rounded-3xl hover:bg-blue-600"
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className="btn mr-2 bg-blue-500 text-white border-slate-500 rounded-3xl hover:bg-blue-600"
        to="/login"
      >
        Login
      </NavLink>
    </>
  );

  return (
    <div className="w-full bg-base-100 dark:bg-slate-950 border-b-2 border-blue-500  fixed top-0 z-20 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-md">
      <div className="navbar container mx-auto py-5">
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
              className="menu menu-sm dropdown-content bg-base-100 dark:bg-slate-600 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {buttons}
            </ul>
          </div>
          <a className="text-2xl font-extrabold md:bg-gradient-to-l from-blue-700 to-transparent ">
            CHILL{" "}
            <span className="p-1 bg-gradient-to-l from-blue-500 to-transparent md:text-slate-200">
              GAMER
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 dark:bg-slate-900 rounded-3xl">
            {buttons}
          </ul>
        </div>
        <div className="navbar-end scale-75 md:scale-100">
          {user ? (
            <>
              <img
                width={60}
                className="rounded-full border-blue-500 border-4 hover:shadow-2xl"
                src={user.photoURL}
                alt="user"
                data-tooltip-id="user-tooltip"
                data-tooltip-content={`${user?.displayName || "User"}`}
              />
              <Tooltip
                id="user-tooltip"
                place="top"
                type="dark"
                effect="solid"
              />
              <Link
                className="btn mx-2 text-lg bg-blue-500 text-white border-slate-500 rounded-3xl hover:bg-blue-600"
                onClick={handleSignOut}
              >
                Logout
              </Link>
            </>
          ) : (
            authentications
          )}
          <a className="">
            <Theme></Theme>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
