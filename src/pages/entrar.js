import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useAuth, AuthProvider } from '../lib/AuthContext'
import { Link } from 'gatsby'

const Entrar = () => {
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
  const signIn = () => {
    setError('')
    auth.signIn(form.email, form.passwd)
  }

  let classError = ''
  if(error){
    classError += ' text-red-700 '
  }
  return(
    <Layout>
      <div className="container max-w-full mx-auto md:py-14 px-6 mb-12">
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="md:mt-6">
                <h2 className="text-center font-semibold text-black">Entrar</h2>
                <div className="text-center font-base text-black">
                  <button onClick={auth.authFB} className='bg-blue-800 text-white inline-block py-2 px-4 my-4 text-black no-underline'>
                    Usando o Facebook
                  </button>
                  <p>ou</p>
                </div>
                <form className="mt-8" x-data="{password: '',password_confirm: ''}">
                  <div className="mx-auto max-w-lg ">
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">Seu e-mail</span>
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
                      <span className="px-1 text-sm text-gray-600">Senha</span>
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
                              E-mail ou senha inválidos.
                            </span>
                          </li>
                        }
                      </ul>
                    </div>
                    <button type='button' onClick={signIn} className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                      Entrar
                    </button>
                  </div>
                </form>

                <div className="text-sm font-semibold block py-24 flex justify-center">
                  <Link to='/nova-conta' className="text-black font-normal border-b-2 border-gray-200 hover:border-teal-500">
                    Não possui conta? {' '}<span className="text-black font-semibold">Criar uma nova</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
const EntrarAuth = () => {
  return (
    <AuthProvider>
      <Entrar />
    </AuthProvider>
  )
}

export default EntrarAuth
