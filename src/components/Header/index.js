import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useAuth } from '../../lib/AuthContext'

const Header = ({ home }) => {
  const auth = useAuth()
  const [showMenu, setShowMenu] = useState('hidden')
  const [headerClass, setHeaderClass] = useState(home ? 'text-white' : '')
  const toggleMenu = () => {
    setShowMenu(oldValue => oldValue === 'hidden' ? '' : 'hidden')
  }

  useScrollPosition(({ prevPos, currPos }) => {
    setHeaderClass(currPos.y !== 0 ? 'bg-white shadow' : '')
  })

  return (
    <nav id='header' className={'fixed w-full z-30 top-0 ' + headerClass}>
      <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
        <div className='flex items-center'>
          <Link to='/' className='toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl'>
            { /* <svg className='h-8 fill-current inline' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512.005 512.005'>
            <rect fill='#2a2a31' x='16.539' y='425.626' width='479.767' height='50.502' transform='matrix(1,0,0,1,0,0)' />
            <path className='plane-take-off' d=' M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z '/>
  </svg>*/} VaiDarCerto.org
          </Link>
        </div>

        <div className='block lg:hidden pr-4'>
          <button id='nav-toggle' className='flex items-center p-1 text-orange-800 hover:text-gray-900' onClick={toggleMenu}>
            <svg className='fill-current h-6 w-6' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Menu</title><path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' /></svg>
          </button>
        </div>

        <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${showMenu} lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20`} id='nav-content'>
          <ul className='list-reset lg:flex justify-end flex-1 items-center'>
            <li className='mr-3'>
              <Link to='/' activeClassName='font-bold' className='inline-block py-2 px-4 text-black no-underline'>Início</Link>
            </li>
            <li className='mr-3'>
              <Link to='/aprender' activeClassName='font-bold' className='inline-block py-2 px-4 text-black no-underline'>Aprender</Link>
            </li>
            <li className='mr-3'>
              {!auth.isAuth && <button onClick={auth.authFB} className='bg-blue-800 text-white inline-block py-2 px-4 text-black no-underline'>Entrar com Facebook</button>}
              {auth.isAuth && <span className='inline-block py-2 px-4 text-black no-underline'>{auth.name}</span>}
            </li>
            {/*
              <li className='mr-3'>
              <a className='inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4' href='#'>Caixa de Ideias</a>
            </li>
            
            <li className='mr-3'>
              <Link to='/classificados' className='inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4'>Classificados</Link>
            </li>*/ }
          </ul>
          { /* <button id='navAction' className='mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75'>Action</button> */}
        </div>
      </div>

      <hr className='border-b border-gray-100 opacity-25 my-0 py-0' />
    </nav>
  )
}
export default Header
