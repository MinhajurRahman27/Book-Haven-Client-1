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
import axios from "axios";
import BookDetails from "./Components/pages/BookDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import UpdateBook from "./Components/pages/UpdateBook";
import ErrorPage from "./Components/pages/ErrorPage";
import { ThemeProvider } from "next-themes";

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
        path: "addBook",
        element: (
          <PrivateRoute>
            <Addbook></Addbook>
          </PrivateRoute>
        ),
      },
      {
        path: "myBooks",
        element: (
          <PrivateRoute>
            <MyBook></MyBook>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "bookDetails/:id",
        loader: ({ params }) =>
          axios.get(
            `https://bookhaven-server-two.vercel.app/book-details/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "updateBook/:id",
        loader: ({ params }) =>
          axios.get(
            `https://bookhaven-server-two.vercel.app/userbook-details/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
