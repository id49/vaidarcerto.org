import React from 'react'
import { Link, navigate } from 'gatsby'

import './styles.css'

const Dropdown = ({ auth }) => {  
  return (
    <div className='dropdown inline-block relative'>
      <button onClick={ () => navigate('/restrito') } className='font-semibold py-2 px-4 rounded inline-flex items-center'>
        <span>{auth.name}</span>
      </button>
      <ul className='dropdown-content absolute hidden text-gray-700 pt-1 w-full'>
        <li className='w-full'>          
          <Link
              to='/restrito'
              className='rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-full text-center'
          >
            Área restrita
          </Link>
        </li>
        {auth.loggedWithEmail && (
          <li className='w-full'>
            <Link
              to='/restrito/update-password'
              className='bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-full text-center'
            >
              Alterar senha
            </Link>
          </li>
        )}
        <li className='w-full'>          
          <button
            onClick={auth.signOut}
            className='rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-full'
          >
            Sair
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown
