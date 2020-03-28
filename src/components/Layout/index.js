import React from 'react'
import Header from '../Header'
import './styles.css'
import Footer from '../Footer'
import { AuthProvider } from '../../lib/AuthContext'

const Layout = ({ children, home }) => {
  const wrapper = home ? 'gradient' : 'pt-12 '
  const center = home ? '' : 'container mx-auto pt-12 '
  return (
    <AuthProvider>
      <div className={wrapper}>
        <Header home={home} />
        <div className={center}>
          {children}
        </div>
      </div>
      <Footer />
    </AuthProvider>
  )
}
export default Layout
