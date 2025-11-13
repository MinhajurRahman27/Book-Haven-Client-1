import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { Tooltip } from "react-tooltip";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import { useTheme } from "next-themes";
// import { toast, ToastContainer } from "react-toastify";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";



const Navbar = () => {
  const { user, signOutuser, loading } = use(AuthContext);
  console.log(user);

  // if (loading) {
  //   return <span className="loading loading-spinner text-primary"></span>;
  // }

  const {theme, setTheme} = useTheme()

  const links = (
    <>
      <li>
        <NavLink className='hover:border-b-gray-500 hover:border-b-2' to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className='hover:border-b-gray-500 hover:border-b-2' to="/allBooks">All Books</NavLink>
      </li>

      <li>
        <NavLink className='hover:border-b-gray-500 hover:border-b-2' to="/addBook">Add Books</NavLink>
      </li>
      <li>
        <NavLink className='hover:border-b-gray-500 hover:border-b-2' to="/myBooks">My Books</NavLink>
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

  console.log(user)
  return (
    <div className="navbar shadow-sm max-w-11/12 h-[90px] mx-auto mb-0">
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
        <div className=" flex items-center gap-1 font-semibold text-xl "> <img className="w-10" src="https://i.ibb.co.com/KxHLwfcV/book.png" alt="" /> <p className="dark:text-white">Book<span className="text-gray-600 dark:text-gray-400">Haven</span></p></div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-gray-700 dark:text-white ">{links}</ul>

 

      </div>
      <div className="navbar-end flex gap-1  items-center">
       
        <button 
        onClick={()=>setTheme(theme === 'light'? 'dark' : 'light')}
        className=" hover:border-b-gray-600 cursor-pointer rounded-lg shadow-xs  shadow-gray-600  dark:bg-white text-black ">
         {theme === 'light'? <MdDarkMode className="text-[30px] text-gray-700"/> : <MdLightMode className="text-[30px] text-gray-700"/>}
        </button>
        <div>
          {user && (
            <div
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user.displayName}
              data-tooltip-place="bottom"
            >
              <img className="w-7.5  rounded-lg   border-gray-500" src={user.photoURL ? user.photoURL : <CgProfile />} alt="" />
            </div>
          )}
        </div>
        <Tooltip id="my-tooltip" style={{ backgroundColor: "rgba(0, 0, 0, 1)", color: "#ffffffff", borderRadius:"10px" }}/>
        <div>
          {user ? (
            <button className="btn   rounded-4xl text-white bg-indigo-500" onClick={handleSignOut}>
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
