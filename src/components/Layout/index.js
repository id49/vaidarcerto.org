import React from 'react'
import Header from '../Header'
import './styles.css'
import Footer from '../Footer'
import { AuthProvider } from '../../lib/AuthContext'

const Layout = ({ children, home }) => {
  return (
    <AuthProvider>
      <div className='gradient'>
        <Header home={home} />
        {children}
      </div>
      <Footer />
    </AuthProvider>
  )
}
export default Layout
