import React from 'react'
import { Link } from 'gatsby'

const CardCity = ({ city }) => {
  return(
    <Link to={'/empresas/' + city.state.toLowerCase() + '/' + city.slug} className="block w-full mt-4 mb-4">
      <div className="border border-gray-400 bg-gray-100 hover:bg-gray-300 rounded p-4 flex flex-col justify-between leading-normal text-gray-800 font-bold text-xl">
        {city.name} - {city.state}
      </div>
    </Link>
  )
}

export default CardCity