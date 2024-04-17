import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './LoginPage'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path : '/',
            element : <Login />
        }
    ])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body