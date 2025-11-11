import React, { use } from "react";
import { useLoaderData } from "react-router";

const BookDetails = () => {
  const book = useLoaderData();

  console.log(book.data);
  const { title, author, coverImage, genre, rating, summary, userEmail } =
    book.data;
  return (
    <div className="m-5">
      <div className="flex justify-center  w-[800px] mx-auto">
        <div className="w-[50%] ">
          <img
            className="rounded-lg h-[500px] mx-auto w-[90%] "
            src="https://i.ibb.co.com/rK1PVkPT/books-8770939-1280.jpg"
            alt=""
          />
        </div>
        <div className="w-[50%]  pr-20 space-y-2">
          <p>{rating}</p>
          
          <h1 className="font-semibold text-3xl hover:text-green-700">{title}</h1>
          <p className="font-semibold text-gray-500 hover:text-blue-400 text-[14px]">{author}</p>
          <p className="font-semibold text-gray-500 text-[14px]">{genre}</p>
          <p className="mt-5 text-xl">{summary}</p>
          <p className="text-gray-500 text-[14px]">{userEmail}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
