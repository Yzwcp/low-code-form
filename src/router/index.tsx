import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Main from '../layout/Main.tsx'
import Manage from '../layout/Manage.tsx'
import Question from '../layout/Question.tsx'
import Login from '../pages/auth/login/Login.tsx'
import Register from '../pages/auth/register/Register.tsx'
import NotFound from '../pages/auth/404/NotFound.tsx'
import List from '../pages/manage/list/List.tsx'
import Star from '../pages/manage/star/Star.tsx'
import Trash from '../pages/manage/trash/Trash.tsx'
import Edit from '../pages/question/edit/Edit.tsx'
import Home from '../pages/home/Home.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/manage',
    element: <Manage />,
    children: [
      {
        path: '/manage/list',
        element: <List />,
      },
      {
        path: '/manage/star',
        element: <Star />,
      },
      {
        path: '/manage/trash',
        element: <Trash />,
      },
    ],
  },
  {
    path: '/question/edit/:id',
    element: <Edit />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
