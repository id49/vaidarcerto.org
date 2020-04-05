import React, { useState } from 'react'
import firebase from '../../components/firebase'
import { useAuth } from '../../lib/AuthContext'
import { navigate, Link } from 'gatsby'
import InputPhone from '../../components/InputPhone'

const contactLabels = {
  'fixo': 'Telefone fixo',
  'whatsapp': 'Whatsapp'
}

const CreateListings = ({ city, state }) => {
  const db = firebase.firestore()
  const auth = useAuth()
  const [form, setForm] = useState({
    city,
    state,
    name: '',
    status: 'pending',
    description: '',
    user: auth.uid
  })
  const [error, setError] = useState([])
  const [contacts, setContacts] = useState([
  ])

  const onChange = evt => {
    const value = evt.target.value
    const field = evt.target.name
    setForm(oldForm => ({
      ...oldForm,
      [field]: value
    }))
  }
  const onChangeContact = index => evt => {
    const value = evt.target.value
    setContacts(oldContacts => {
      const newContact = {
        ...oldContacts[index],
        value
      }
      return oldContacts.map((contact, i) => {
        if(i === index){
          return newContact
        }
        return contact
      })
    })
  }
  const createListing = () => {
    let error = []
    if(form.name.length < 5){
      error.push('O nome da empresa/profisional deve ter pelo menos 5 caracteres.')
    }
    if(form.description.length < 5){
      error.push('A descrição da empresa/profisional deve ter pelo menos 5 caracteres.')
    }
    const formatedContacts = contacts.map(contact => {
      return {
        ...contact,
        value: contact.value.replace(/\D/g,'')
      }
    })
    formatedContacts.forEach(contact => {
      if(contact.type === 'fixo' && contact.value.length !== 10){
        error.push('Por favor, corrija o telefone fixo.')
      }
      if(contact.type === 'whatsapp' && contact.value.length < 10){
        error.push('Por favor, corrija o telefone do whatsapp.')
      }
    })
    if(formatedContacts.length === 0){
      error.push('Cadastre pelo menos uma forma de contato.')
    }
    if(error.length === 0){
      const newListing = {
        ...form,
        contacts: formatedContacts
      }
      const docRef = db
        .collection('listings-new')
        .doc()
      docRef
        .set(newListing)
        .then(() => {
          navigate('/restrito/listings/'+state+'/'+city)
        })
    }
    setError(error)
  }

  const addContact = type => {
    setContacts(old => {
      return [...old, {
        type,
        value: ''
      }]
    })
  }
  const removeContact = index => () => {
    setContacts(oldContacts => {
      return oldContacts.filter((contact, i) => i !== index)
    })
  }



  let classError = ''
  if(!error){
    classError +=  ' text-green-700 '
  }
  if(error){
    classError += ' text-red-700 '
  }
  return(
      <div className="container max-w-full mx-auto md:py-14 px-6 mb-12">
        <h1 className='font-bold text-xl'>Cadastrando empresas em: <Link className='underline' to={`/restrito/listings/${state}/${city}`}>{city} / {state}</Link></h1>
        <div className="max-w-lg mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="md:mt-6">
                <form className="mt-8" x-data="{password: '',password_confirm: ''}">
                  <div className="mx-auto max-w-lg ">
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">Nome da Empresa</span>
                      <input
                        value={form.name}
                        name='name'
                        onChange={onChange}
                        placeholder=""
                        type="text"
                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                    </div>

                    <div className='border-2 p-4 my-6'>
                      <h3 className='font-bold'>Contatos:</h3>
                      <div className="py-1 grid grid-cols-2 gap-2">
                        <button className="mt-3 font-semibold bg-gray-800 w-full text-white rounded-lg px-2 py-2 block hover:text-white hover:bg-black" onClick={() => addContact('whatsapp')} type='button'>Adicionar Whatsapp</button>
                        <button className="mt-3 font-semibold bg-gray-800 w-full text-white rounded-lg px-2 py-2 block hover:text-white hover:bg-black" onClick={() => addContact('fixo')} type='button'>Adicionar Telefone fixo</button>
                      </div>
                      {contacts.map((contact, index) => {
                        return (
                          <div className="py-3">
                            <span className="px-1 text-sm text-gray-600">{contactLabels[contact.type]} {index+1}: 
                              <button type='button' className='ml-2 bg-gray-800 text-white rounded-lg px-3 py-1 hover:text-white hover:bg-black' onClick={removeContact(index)}>remover</button>
                            </span>
                            <InputPhone
                              type={contact.type}
                              name={index}
                              key={index}
                              value={contact.value}
                              onChange={onChangeContact(index)}
                              className="mt-3 text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                            />
                          </div>
                        )
                      })}
                    </div>

                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">Descrição</span>
                      <textarea
                        placeholder=""
                        value={form.description}
                        onChange={onChange}
                        name='description'
                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                    </div>
                    <div className="flex justify-start mt-3 ml-4 p-1">
                      <ul>
                        { error &&
                          error.map((err,i) => <li key={i} className="flex items-center py-1">
                            <div
                              className={'rounded-full p-1 fill-current bg-red-200 text-red-700 mr-2'}
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </div>
                            <span
                              className={classError}
                            >
                              {err}
                            </span>
                          </li>)
                        }
                      </ul>
                    </div>
                    <button type='button' onClick={createListing} className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                      Cadastrar Empresa
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CreateListings
