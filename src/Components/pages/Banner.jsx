import { motion } from "framer-motion";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="  w-11/12  h-full mx-auto flex items-center justify-between overflow-hidden mb-30 mt-15 ">
      <div className="space-y-5  pb-5">
        <motion.h1
          className="text-[60px]  font-bold  text-sm/14"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          A Smart Library <br /> For Smarter Readers
        </motion.h1>
        <motion.h2
          className="text-2xl text-gray-600 mb-14"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {" "}
        Step into your personal digital library where knowledge meets creativity. <br /> Discover new books, add your favorites, update old collections, and manage everything effortlessly — anytime, anywhere.
        </motion.h2>
        <div className=" gap-5">
          <Link to='/allBooks' className="btn w-[200px] hover:opacity-90 mr-2 rounded-4xl  border-0 text-white bg-indigo-600">All Books</Link>
          <Link to='/addBook' className="btn  rounded-4xl w-[200px] border-0 text-white bg-indigo-600 hover:opacity-90">Create Book</Link>
        </div>
      </div>
      <div className="">
        <motion.img
          className="rounded-2xl  shadow-lg  shadow-indigo-500"
          initial={{ opacity: 0, y: -100 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          src="https://i.ibb.co.com/N6Jbv6fB/book-open-pages-close-up-600nw-2562942291.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
