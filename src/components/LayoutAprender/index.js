import React from 'react'
import Header from '../Header'
import './styles.css'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Footer from '../Footer'
import Seo from '../Seo'

const QUERY_LEARNING_PATHS = graphql`
  query {
    allLearningPaths {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`

const Menu = () => {
  const { allLearningPaths } = useStaticQuery(QUERY_LEARNING_PATHS)
  return(
    <div className='w-full lg:w-1/5 lg:px-6 text-xl text-gray-800 leading-normal'>
       <p className='text-base font-bold py-2 lg:pb-6 text-gray-700'>Trilhas de Aprendizado</p>
       <div className='block lg:hidden sticky inset-0'>
          <button id='menu-toggle' className='flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-purple-500 appearance-none focus:outline-none'>
             <svg className='fill-current h-3 float-right' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'/>
             </svg>
          </button>
       </div>
       <div className='w-full sticky inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20' id='menu-content'>
          <ul className='list-reset'>
             <li className='py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent'>
                <Link to='/aprender' activeClassName='lg:border-purple-500 font-bold' className='block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-purple-500'>
                  <span className='pb-1 md:pb-0 text-sm text-gray-900'>Apresentação</span>
                </Link>
             </li>
             {
              allLearningPaths.edges.map(node => {
                return(
                  <li className='py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent'>
                      <Link activeClassName='lg:border-purple-500 font-bold' to={'/aprender/' + node.node.slug} className='block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400'>
                      <span className='pb-1 md:pb-0 text-sm'>{node.node.title}</span>
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

const Layout = ({ children, title='Aprender' }) => {
  return (
    <div className='bg-gray-100'>
      <Seo title={title} />
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
  )
}
export default Layout
