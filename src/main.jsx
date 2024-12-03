import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout.jsx'
import AllReviews from './Pages/AllReviews.jsx'
import AddReviews from './Pages/AddReviews.jsx'
import MyReviews from './Pages/MyReviews.jsx'
import GameWatchList from './Pages/GameWatchList.jsx'

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
        element: <AddReviews></AddReviews>,
      },
      {
        path : "/myReview",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/myWatchList",
        element: <GameWatchList></GameWatchList>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
