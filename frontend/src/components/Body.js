import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './LoginPage'
import Home from './HomePage'
import SignUpPage from './SignUpPage'
import MainPage from './MainPage'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path : '/login',
            element : <Login />
        },
        {
          path : '/',
          element : <Home />
        },
        {
          path : '/signup',
          element : <SignUpPage />
        },
        {
          path : '/main',
          element : <MainPage />
        }
    ])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body