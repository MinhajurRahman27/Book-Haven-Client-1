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
    <div className=" md:w-11/12 mx-auto  mt-5 pb-40 ">
      <div className="overflow-x-auto">
        <table className="table ">
        {/* head */}
        <thead>
          <tr className="dark:text-gray-400">
            <th>Sl.</th>
            <th>CoverImage</th>
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
            <tr key={book._id} className="font-semibold md:text-[16px]">
              <td>{index + 1}</td>
              <td><img className="w-10" src={book.coverImage} alt="" /></td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.rating}</td>
              <td>
                <Link to={`/updateBook/${book._id}`} className="btn hover:opacity-90 mr-2 rounded-4xl  border-0 w-[140px] text-white bg-indigo-600">
                  Update
                </Link>
                <button
                  onClick={() => {
                    handleDelete(book._id);
                  }}
                  className="btn hover:opacity-90 mr-2 rounded-4xl  border-0 w-[140px] text-white bg-indigo-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default MyBook;
