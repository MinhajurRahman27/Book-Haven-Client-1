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

  //name,author,genre, rating.
  return (
    <div className="px-15 ">
      <div className=" px-5 mt-2">
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
      <div className=" m-6 border">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Rating</th>
              <th className="pl-10">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {books.map((book, index) => (
              <tr key={book._id}>
                <th>{index + 1}</th>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.rating}</td>
                <td>
                  <Link to={`/bookDetails/${book._id}`} className="btn">
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
