import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useAuth0 } from '@auth0/auth0-react'
import Loader from './Loader'

const Layout = () => {
  const { isLoading } = useAuth0();

  return (
    (isLoading) ? <Loader /> : <>
    <Header/>
    <div style={{ paddingTop: 66 }}>
      <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default Layout
