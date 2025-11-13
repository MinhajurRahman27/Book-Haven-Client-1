import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-5 mt-30">
      <div className=" mx-auto text-center w-[300px] ">
        <div className="">
          <p className="dark:text-white font-bold text-3xl">Book<span className="text-gray-600 dark:text-gray-400">Haven</span></p>
          <div className="flex  gap-4  items-center justify-center mt-3">
           
            <img className="w-9 h-9 border-2 rounded-lg  bg-white" src="https://i.ibb.co.com/QjPhBBsH/icons8-gmail-50.png" alt="" />
            <img className="w-9 h-9 border-2 rounded-lg bg-white" src="https://i.ibb.co.com/LdSbHLgB/twitter.png" alt="" />
            <img className="w-9 h-9 border-2 rounded-lg bg-white" src="https://i.ibb.co.com/N6hTDbw4/linkedin.png" alt="" />
            <img className="w-9 h-9 border-2 rounded-lg bg-white" src="https://i.ibb.co.com/KxyXxpCF/icons8-github-48.png" alt="" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 font-semibold text-[16px]">
        © 2025 BookHaven | Developed by Minhajur Rahman | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
