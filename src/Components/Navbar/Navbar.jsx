import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { Tooltip } from "react-tooltip";
import toast, { ToastBar, Toaster } from "react-hot-toast";
// import { toast, ToastContainer } from "react-toastify";



const Navbar = () => {
  const { user, signOutuser, loading } = use(AuthContext);
  console.log(user);

  // if (loading) {
  //   return <span className="loading loading-spinner text-primary"></span>;
  // }

  const links = (
    <>
      <li>
        <NavLink to="/">Homew</NavLink>
      </li>
      <li>
        <NavLink to="/allBooks">All Books</NavLink>
      </li>

      <li>
        <NavLink to="/addBook">Add Books</NavLink>
      </li>
      <li>
        <NavLink to="/myBooks">My Books</NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    signOutuser().then(() => {
      toast("LogOut successfull");
    })
    .catch(err =>{
      console.log(err.message)
       toast("Something went wrong!");
    });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">SmartDealz</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-1  items-center">
        <div>
          {user && (
            <div
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user.displayName}
              data-tooltip-place="bottom"
            >
              <img className="w-10 mt-1 rounded" src={user.photoURL} alt="" />
            </div>
          )}
        </div>
        <Tooltip id="my-tooltip" style={{ backgroundColor: "rgba(0, 0, 0, 1)", color: "#ffffffff", borderRadius:"10px" }}/>
        <div>
          {user ? (
            <button className="btn" onClick={handleSignOut}>
              Logout
            </button>
            
          ) : (
            <Link className="btn" to="/login">
              login/register
            </Link>
          )}
        </div>
       {/* <ToastContainer></ToastContainer> */}
       <Toaster></Toaster>
      </div>
      
    </div>
  );
};

export default Navbar;
