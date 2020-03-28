import React, { useState } from 'react'
import Layout from '../components/Layout'
import firebase from '../components/firebase'
import { useAuth, AuthProvider } from '../lib/AuthContext'
import { Link, navigateTo } from 'gatsby'

const errorCodes = {
  'auth/email-already-in-use': 'Este e-mail já está em uso na plataforma.',
  'auth/invalid-email': 'E-mail inválido.',
  'auth/operation-not-allowed': 'Algo deu errado, tente novamente em alguns minutos.',
  'auth/weak-password': 'Por favor, informe uma senha um pouco mais forte.'
}

const NovaConta = () => {
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
    if (form.passwd.length >=6 && form.passwd === form.passwd2) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(form.email, form.passwd)
        .then(() => {
          navigateTo('/restrito')
        })
        .catch(function(error) {
          setError(error.code)
        })
    }
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
    <Layout>
      
      <div className="container max-w-full mx-auto md:py-14 px-6 mb-12">
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="md:mt-6">
                <h2 className="text-center font-semibold text-black">Criar sua conta</h2>
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
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">
                        Confirme sua senha
                      </span>
                      <input
                        value={form.passwd2}
                        onChange={onChange}
                        name='passwd2'
                        placeholder=""
                        type="password"
                        x-model="password_confirm"
                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                    </div>
                    <div className="flex justify-start mt-3 ml-4 p-1">
                      <ul>
                        <li className="flex items-center py-1">
                          <div
                            className={classIcon}
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                            { form.passwd === form.passwd2 && 
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              />
                            }
                            { form.passwd !== form.passwd2 && <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            }
                            </svg>
                          </div>
                          <span
                            className={classError}
                          >
                            { form.passwd === form.passwd2 && form.passwd.length >=6 && 'Tudo certo :)' }
                            { form.passwd === form.passwd2 && form.passwd.length < 6 && 'Sua senha deve ter pelo menos 6 caracteres.' }
                            { form.passwd !== form.passwd2 && 'Senha e confirmação de senha devem ser iguais.'}
                          </span>
                        </li>
                        { error &&
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
                              { !!errorCodes[error] ? errorCodes[error] : 'Alguma coisa deu errado... Tente novamente em alguns minutos.' }
                            </span>
                          </li>
                        }
                      </ul>
                    </div>
                    <button type='button' onClick={createAccount} className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                      Criar conta
                    </button>
                  </div>
                </form>

                <div className="text-sm font-semibold block py-24 flex justify-center">
                  <Link to='/entrar' className="text-black font-normal border-b-2 border-gray-200 hover:border-teal-500">
                    Já possui conta? {' '}<span className="text-black font-semibold">Entrar</span>
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
const NovaContaAuth = () => {
  return (
    <AuthProvider>
      <NovaConta />
    </AuthProvider>
  )
}

export default NovaContaAuth
