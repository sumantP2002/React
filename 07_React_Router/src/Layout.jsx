import React from 'react'

import { Outlet } from 'react-router-dom'
import Headerpage from './Component/Headerpage.jsx/Headerpage'
import Footerpage from './Component/Footerpage/Footerpage'

function Layout() {
  return (
    <>
       <Headerpage/>
       <Outlet/>
       <Footerpage/>
    </>
  )
}

export default Layout