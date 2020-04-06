import React from 'react'
import Header from '../Header'
import './styles.css'
import { Link } from 'gatsby'
import Footer from '../Footer'
import Seo from '../Seo'
import { AuthProvider } from '../../lib/AuthContext'


const Menu = () => {
  const ideias = [
    { url: '/ideias/producao-de-mascaras-caseiras/', label: 'Produção de Máscaras Caseiras - paro uso e combate à disseminaçã do Coronavírus'}
  ]

  return(
    <div className='w-full lg:w-1/5 lg:px-6 text-xl text-gray-800 leading-normal'>
      <p className='text-base font-bold py-2 lg:pb-6 text-gray-700'>Ideias replicáveis</p>
      <div className='w-full sticky inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20' id='menu-content'>
        <ul className='list-reset'>
          {
          ideias.map(ideia => {
            return(
              <li key={ideia.url} className='py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent'>
                  <Link activeClassName='lg:border-purple-500 font-bold' to={ideia.url} className='block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400'>
                    <span className='pb-1 md:pb-0 text-sm'>{ideia.label}</span>
                  </Link>
              </li>
            )
          })
          }
        </ul>
      </div>
    </div>
  )
}

const Layout = ({ children, title='Aprender', ogImage = '' }) => {
  return (
    <AuthProvider>
      <div className='bg-gray-100'>
        <Seo title={title} ogImage={ogImage} />
        <div className='bg-grey-100'>
          <Header />
        </div>
        <div className='container w-full flex flex-wrap mx-auto px-2 pt-8 pb-8 lg:pt-16 mt-16'>
          <Menu />
          <div className='w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded'>
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </AuthProvider>
  )
}
export default Layout
