import React, { useState } from 'react'
import Layout from '../../components/Layout'
import firebase from '../../components/firebase'
import { useAuth, AuthProvider } from '../../lib/AuthContext'
import { Link, navigateTo } from 'gatsby'

const errorCodes = {
  'auth/email-already-in-use': 'Este e-mail já está em uso na plataforma.',
  'auth/invalid-email': 'E-mail inválido.',
  'auth/operation-not-allowed': 'Algo deu errado, tente novamente em alguns minutos.',
  'auth/weak-password': 'Por favor, informe uma senha um pouco mais forte.'
}

const CreateListings = () => {
  const auth = useAuth()
  const [form, setForm] = useState({
    email: '',
    passwd: '',
    passwd2: ''
  })
  const [error, setError] = useState('')

  const onChange = evt => {
    const value = evt.target.value
    const field = evt.target.name
    setForm(oldForm => ({
      ...oldForm,
      [field]: value
    }))
    setError('')
  }
  const createAccount = () => {
    setError('')
    auth.signIn(form.email, form.passwd)
  }

  let classError = ''
  let classIcon = ' rounded-full p-1 fill-current mr-2 '
  if(form.passwd === form.passwd2 && form.passwd.length >= 6){
    classError +=  ' text-green-700 '
    classIcon += ' bg-green-200 text-green-700 '
  }
  if(form.passwd !== form.passwd2 || form.passwd.length < 6){
    classError += ' text-red-700 '
    classIcon += ' bg-red-200 text-red-700 '
  }
  return(
    
      <div className="container max-w-full mx-auto md:py-14 px-6 mb-12">
        <div className="max-w-lg mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="md:mt-6">
                <form className="mt-8" x-data="{password: '',password_confirm: ''}">
                  <div className="mx-auto max-w-lg ">
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">Nome da Empresa</span>
                      <input
                        value={form.email}
                        name='email'
                        onChange={onChange}
                        placeholder=""
                        type="email"
                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                    </div>
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">Contato</span>
                      <input
                        placeholder=""
                        value={form.passwd}
                        onChange={onChange}
                        name='passwd'
                        type="password"
                        x-model="password"
                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                    </div>
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">Descrição</span>
                      <textarea
                        placeholder=""
                        value={form.passwd}
                        onChange={onChange}
                        name='passwd'
                        type="password"
                        x-model="password"
                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                    </div>
                    <div className="flex justify-start mt-3 ml-4 p-1">
                      <ul>
                        { auth.error &&
                          <li className="flex items-center py-1">
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
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </div>
                            <span
                              className={classError}
                            >
                              E-mail ou senha inválidos.
                            </span>
                          </li>
                        }
                      </ul>
                    </div>
                    <button type='button' onClick={createAccount} className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
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
