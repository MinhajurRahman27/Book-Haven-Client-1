import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import { Link } from "react-router";
import Spinner from "../Spinner/Spinner";
import toast, { Toaster } from "react-hot-toast";

const MyBook = () => {
  const { user } = use(AuthContext);
  const [myBooks, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://bookhaven-server-two.vercel.app/myBooks/?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => {
        setBooks(data.data);
        console.log(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  console.log(myBooks);
  const handleDelete = (id) => {
    console.log(id);

    axios
      .delete(`https://bookhaven-server-two.vercel.app/delete-book/${id}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("deleted successfully");
        const remaining = myBooks.filter((book) => book._id !== id);

        console.log(remaining);
        setBooks(remaining);
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Something Went Wrong!");
      });
  };

  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="card shadow-2xl w-[700px] mx-auto mt-5">
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
          {myBooks.map((book, index) => (
            <tr key={book._id}>
              <th>{index + 1}</th>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.rating}</td>
              <td>
                <Link to={`/updateBook/${book._id}`} className="btn">
                  Update
                </Link>
                <button
                  onClick={() => {
                    handleDelete(book._id);
                  }}
                  className="btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Toaster></Toaster>
    </div>
  );
};

export default MyBook;
