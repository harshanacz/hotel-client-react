import React from 'react'
import GlobalNavbarWhite from '../components/GlobalNavbarWhite'
import Footer from '../components/Footer'

const MainLayout = ({children}) => {
  return (
    <div>
      <GlobalNavbarWhite />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
