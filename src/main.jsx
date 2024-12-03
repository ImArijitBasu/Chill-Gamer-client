import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, useLoaderData } from "react-router-dom";
import MainLayout from "./Layout/MainLayout.jsx";
import AllReviews from "./Pages/AllReviews.jsx";
import AddReviews from "./Pages/AddReviews.jsx";
import MyReviews from "./Pages/MyReviews.jsx";
import GameWatchList from "./Pages/GameWatchList.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './Pages/Home.jsx'
import ReviewDetails from './Pages/ReviewDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allReviews",
        element: <AllReviews></AllReviews>,
        loader: () => fetch('http://localhost:5000/games'),
      },
      {
        path: "/addReviews",
        element: (
          <PrivateRoute>
            <AddReviews></AddReviews>,
          </PrivateRoute>
        ),
      },
      {
        path: "/myReview",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>,
          </PrivateRoute>
        ),
      },
      {
        path: "/allReview/:id",
        element: <ReviewDetails></ReviewDetails>,
        loader : ({params}) => fetch(`http://localhost:5000/games/${params.id}`)
      },
      {
        path: "/myWatchList",
        element: (
          <PrivateRoute>
            <GameWatchList></GameWatchList>,
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
