import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import AllBooks from "./Components/AllBook/AllBooks";
import Addbook from "./Components/AddBook/Addbook";
import MyBook from "./Components/MyBook/MyBook";
import Login from "./Components/LoginRegister/Login";
import Register from "./Components/LoginRegister/Register";
import AuthProvider from "./Context/AuthProvider";
import BookDetails from "./Components/pages/BookDetails";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allBooks",
        Component: AllBooks,
      },
      {
        path: "allBooks",
        Component: AllBooks,
      },
      {
        path: "bookDetails/:id",
        Component: BookDetails,
      },
      {
        path: "myBooks",
        Component: MyBook,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
