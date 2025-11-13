import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Spinner from "../Spinner/Spinner";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://bookhaven-server-two.vercel.app/all-books")
      .then((data) => {
        setBooks(data.data);
        console.log(data.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner></Spinner>;
  }

  const handleSOrt = () => {
    const sorted = [...books].sort(
      (a, b) => Number(b.rating) - Number(a.rating)
    );
    setBooks(sorted);
  };
  const handleSOrtLowTohight = () => {
    const sorted = [...books].sort(
      (a, b) => Number(a.rating) - Number(b.rating)
    );
    setBooks(sorted);
  };
  console.log(books)
  //name,author,genre, rating.
  return (
    <div className=" md:w-11/12 mx-auto">
      <div className="  mt-2  text-right pr-5">
        <button
          className="btn"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
        >
          Sort by Ratings
        </button>

        <ul
          className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
        >
          <li>
            <button onClick={handleSOrt}>Hight to Low</button>
          </li>
          <li>
            <button onClick={handleSOrtLowTohight}>Low to High</button>
          </li>
        </ul>
      </div>
      <div className=" mt-5 overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="dark:text-gray-500">
              <th>Sl.</th>
              <th>CoverImage</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Rating</th>
              <th className="sm:pl-10">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {books.map((book, index) => (
              <tr key={book._id} className="font-semibold md:text-[16px]">
                <td>{index + 1}</td>
                <td><img className="w-10" src={book.coverImage} alt="" /></td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.rating}</td>
                <td>
                  <Link to={`/bookDetails/${book._id}`} className="btn hover:opacity-90 mr-2 rounded-4xl  border-0 w-[140px] text-white bg-indigo-600">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBooks;
