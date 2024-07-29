import React, { FC } from 'react'
import Home from '../pages/home/Home.tsx'
import { Outlet } from 'react-router-dom'

const Main: FC = () => {
  return (
    <>
      mainheader
      <Outlet></Outlet>
      mainfooter
    </>
  )
}

export default Main
