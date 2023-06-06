import React from 'react'
import Header from './Hedaer/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
const Main = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Main