import React from 'react'
import Phone from '../Phone'
import firebase from '../../components/firebase'

const Card = ({ id, name, description, contacts, status, review, city, state }) => {
  const db = firebase.firestore()
  console.log(id)
  const approve = () => {
    db
      .collection('listings-new')
      .doc(id)
      .update({
        status: 'published'
      })
      .then(() => {
      })
  }
  const reprove = () => {
    db
      .collection('listings-new')
      .doc(id)
      .delete()
      .then(() => {
      })
  }
  return(
    <div key={id} className="w-full mt-4 mb-4">
      <div className="border border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-4">
          { review && <div className="text-gray-800 font-bold text-xl mb-2">{city} / {state}</div> }
          <div className="text-gray-800 font-bold text-xl mb-2">{name} ({status  === 'pending' ? 'Pendente de revisão' : 'Publicado'})</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="flex items-center">
          {Array.isArray(contacts) && contacts.map((contact, index) => {
            return <p key={index.toString()} className='block mr-4'>{contact.type}: <Phone number={contact.value} /></p>
          })}
          {!Array.isArray(contacts) && Object.keys(contacts).map(key => {
            if(key.indexOf('whatsapp') >=0){
              return <a key={key} title='Enviar mensagem no Whatsapp.' className='pr-4 hover:underline' target='_blank' rel='noopener noreferrer' href={'https://api.whatsapp.com/send?phone=+55'+contacts[key]+'&text=Vi seu telefone no VaiDarCerto.org. Gostaria de comprar de voce.'}>Whatsapp: <Phone number={contacts[key]} /></a>
            }
            return null
          })}
        </div>
        { review && <div className='grid grid-cols-2 gap-4'>
        <button type='button' onClick={approve} className="mt-3 text-lg font-semibold bg-gray-800 text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
          Aprovar empresa
        </button>
        <button type='button' onClick={reprove} className="mt-3 text-lg font-semibold bg-red-800 text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-red-600">
          Reprovar empresa
        </button>
        </div>}
      </div>
    </div>
  )
}

export default Card