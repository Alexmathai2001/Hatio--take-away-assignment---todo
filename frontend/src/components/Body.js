import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './LoginPage'
import Home from './HomePage'
import SignUpPage from './SignUpPage'
import MainPage from './MainPage'
import ProjectDescription from './ProjectDescription'

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
          path : '/main/:id',
          element : <MainPage />
        },
        {
          path : '/description/:id',
          element : <ProjectDescription />
        }
    ])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body