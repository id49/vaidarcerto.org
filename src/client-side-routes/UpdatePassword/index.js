import React, { useState, useEffect } from 'react'
import firebase from '../../components/firebase'
import { useAuth, AuthProvider } from '../../lib/AuthContext'
import { navigate } from 'gatsby'

const errorCodes = {
  'auth/operation-not-allowed': 'Algo deu errado, tente novamente em alguns minutos.',
  'auth/weak-password': 'Por favor, informe uma senha um pouco mais forte.',
  'auth/wrong-password': 'Senha atual incorreta.',
  'auth/too-many-requests': 'Muitas falhas ao inserir a senha antiga. Tente novamente mais tarde.'
}

const UpdatePassword = () => {
  const auth = useAuth()
  const [form, setForm] = useState({
    passwdOld: '',
    passwd: '',
    passwd2: ''
  })
  const [error, setError] = useState(null)
  const [requestSent, setRequestSent] = useState(false)

  // if user is not logged with email and password, return to page /restrito  
  useEffect(()=> {
    if (!auth.isAuthReady) return;    
    if (!auth.loggedWithEmail) navigate('/restrito')          
  },[auth.isAuthReady, auth.isAuth])

  const onChange = evt => {
    const value = evt.target.value
    const field = evt.target.name
    setForm(oldForm => ({
      ...oldForm,
      [field]: value
    }))
    setError(null)
    setRequestSent(false)
  }
  const updatePassword = async () => {
    setError(null) 

    if (form.passwd.length >=6 && form.passwd === form.passwd2) {
      setRequestSent(true)   
      try{        
        const user = firebase.auth().currentUser      
        
        await firebase
          .auth()
          .signInWithEmailAndPassword(user.email, form.passwdOld)        

        await user        
          .updatePassword(form.passwd)        

        alert('Senha alterada com sucesso!')
        setRequestSent(false)   
        navigate('/restrito')          

      } catch (err) {
          setError(err.code)
          setRequestSent(false)       
      }
    }
  }

  let classError = ''
  let classIcon = ' rounded-full p-1 fill-current mr-2 '
  if(form.passwd === form.passwd2 && form.passwd.length >= 6 && !error){
    classError +=  ' text-green-700 '
    classIcon += ' bg-green-200 text-green-700 '
  }
  if(form.passwd !== form.passwd2 || form.passwd.length < 6 || error){
    classError += ' text-red-700 '
    classIcon += ' bg-red-200 text-red-700 '
  }
  return(          
      <div className="container max-w-full mx-auto md:py-14 px-6 mb-12">        
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="md:mt-6">
                <h2 className="text-center font-semibold text-black">Alterar senha</h2>
                
                <form className="mt-8" x-data="{password: '',password_confirm: ''}">
                  <div className="mx-auto max-w-lg ">
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">Senha atual</span>
                      <input
                        value={form.passwdOld}
                        name='passwdOld'
                        onChange={onChange}
                        placeholder=""
                        type="password"
                        disabled={requestSent}                    
                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                    </div>
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">Nova senha</span>
                      <input
                        placeholder=""
                        value={form.passwd}
                        onChange={onChange}
                        disabled={requestSent}
                        name='passwd'
                        type="password"
                        x-model="password"
                        disabled={requestSent}                                            
                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                    </div>
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">
                        Confirme sua nova senha
                      </span>
                      <input
                        value={form.passwd2}
                        onChange={onChange}
                        name='passwd2'
                        placeholder=""
                        type="password"
                        x-model="password_confirm"  
                        disabled={requestSent}                                          
                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                    </div>
                    <div className="flex justify-start mt-3 ml-4 p-1">
                      <ul>
                          { (!error && !requestSent) &&
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
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                }
                                { form.passwd !== form.passwd2 && <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                }
                                </svg>
                              </div>
                              <span
                                className={classError}
                              >
                                { form.passwd === form.passwd2 && form.passwd.length >=6 && !requestSent && 'Tudo certo :)' }
                                { form.passwd === form.passwd2 && form.passwd.length < 6 && 'Sua senha deve ter pelo menos 6 caracteres.' }
                                { form.passwd !== form.passwd2 && 'Senha e confirmação de senha devem ser iguais.'}
                              </span>
                            </li>
                        }
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
                              { !!errorCodes[error] ? errorCodes[error] : 'Alguma coisa deu errado... Tente novamente em alguns minutos.' }
                            </span>
                          </li>
                        }
                      </ul>
                    </div>
                    <button type='button' onClick={updatePassword} className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                      Alterar senha
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
const UpdatePasswordAuth = () => {
  return (
    <AuthProvider>
      <UpdatePassword />
    </AuthProvider>
  )
}

export default UpdatePasswordAuth
