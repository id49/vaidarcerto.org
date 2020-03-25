import React from 'react'
import Header from '../Header'
import './styles.css'
import Footer from '../Footer'

const Layout = ({ children, home }) => {
  return (
    <React.Fragment>
      <div className='gradient'>
        <Header home={home} />
        {children}
      </div>
      <Footer />
    </React.Fragment>
  )
}
export default Layout
