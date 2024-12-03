import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/allReviews",
        element: <AllReviews></AllReviews>,
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
