import React from 'react'
import Header from '../Header'
import './styles.css'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Footer from '../Footer'
import Seo from '../Seo'
import { AuthProvider } from '../../lib/AuthContext'
import { findCityByStr } from '../../lib/city'

const QUERY_CITIES = graphql`
  query {
    cities: allListings(filter: {status: { eq: "published" }}) {
      group(field: statecity) {
        totalCount
      }
      distinct(field: statecity)
    }
  }
`

const Menu = () => {
  const { cities } = useStaticQuery(QUERY_CITIES)
  const newCities = cities.distinct.map(findCityByStr)

  return(
    <div className='w-full lg:w-1/5 lg:px-6 text-xl text-gray-800 leading-normal'>
      <p className='text-base font-bold py-2 lg:pb-6 text-gray-700'>Empresas e profissionais liberais</p>
      <div className='w-full sticky inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20' id='menu-content'>
        <ul className='list-reset'>
          {
          newCities.map(city => {
            return(
              <li key={city.state+city.slug} className='py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent'>
                  <Link activeClassName='lg:border-purple-500 font-bold' to={'/empresas/' + city.state.toLowerCase() + '/' + city.slug} className='block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400'>
                    <span className='pb-1 md:pb-0 text-sm'>{city.name} - {city.state}</span>
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

const Layout = ({ children, title='Aprender', description='' }) => {
  return (
    <AuthProvider>
      <div className='bg-gray-100'>
        <Seo title={title} description={description} ogDescription={description} />
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
