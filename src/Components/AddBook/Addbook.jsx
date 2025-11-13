import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

// ● Title
// ● Author
// ● Genre

// ● Rating
// ● Summary
// ● coverImage
// ● User Email (who added this plant generally added user),
// ● User Name (who added this plant generally added user).
const Addbook = () => {
  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    const genre = e.target.genre.value;
    const rating = e.target.rating.value;
    const summary = e.target.summary.value;
    const coverImage = e.target.image.value;
    const userEmail = e.target.email.value;
    const userName = e.target.name.value;

    const bookInfo = {
      title,
      author,
      genre,
      rating,
      summary,
      coverImage,
      userEmail,
      userName,
    };
    console.log(bookInfo);

    axios
      .post(`https://bookhaven-server-two.vercel.app/add-book`, bookInfo, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Book added");
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went wrong!");
      });
  };
  return (
    <div>
      <div className="card   mx-auto shadow-2xl shadow-blue-400  w-[800px] mt-5 mb-5">
        <div className="card-body ">
          <h1 className="text-5xl font-bold ">Add Book</h1>
          <form onSubmit={handleSubmit} className="fieldset grid grid-cols-2">
            <div className="flex flex-col">
              <label className="label">Title</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Title"
                name="title"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="label">Author</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Author"
                name="author"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="label">Genre</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Genre"
                name="genre"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="label">Rating</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Rating"
                name="rating"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="label">CoverImage</label>
              <input
                type="text"
                className="input w-full"
                placeholder="coverImage"
                name="image"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="label">User Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="User-Email"
                name="email"
                defaultValue={user.email}
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label className="label">User Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="User-Name"
                name="name"
                defaultValue={user.displayName}
              />
            </div>
            <div className="flex flex-col col-span-2 ">
              <label className="label">Summary</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Summary"
                name="summary"
                required
              />
            </div>

            <button className="btn btn-neutral mt-4 col-span-2">Add</button>
          </form>
          <Toaster></Toaster>
        </div>
      </div>
    </div>
  );
};

export default Addbook;
