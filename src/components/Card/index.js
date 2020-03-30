import React from 'react'

import Phone from '../Phone'

const Card = ({ id, name, description, contacts }) => {
  return(
    <div key={id} className="w-full mt-4 mb-4">
      <div className="border border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-4">
          <div className="text-gray-800 font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="flex items-center">
          {Object.keys(contacts).map(key => {
            if(key.indexOf('whatsapp') >=0){
              return <a key={key} title='Enviar mensagem no Whatsapp.' className='pr-4 hover:underline' target='_blank' href={'https://api.whatsapp.com/send?phone=+55'+contacts[key]+'&text=Vi seu telefone no VaiDarCerto.org. Gostaria de comprar de voce.'}>Whatsapp: <Phone number={contacts[key]} /></a>
            }
            if(key.indexOf('instagram') >=0){
              return <a key={key} title='Acessar perfil no instagram.' className='pr-4 hover:underline' target='_blank' href={'https://instagram.com/'+contacts[key]}>@{contacts[key]}</a>
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Card