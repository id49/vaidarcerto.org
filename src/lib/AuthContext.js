import React, { createContext, useContext, useEffect, useState } from 'react'
import firebase from '../components/firebase'
import { navigateTo } from 'gatsby'
export const AuthContext = createContext()
export const useAuth = () => {
  const value = useContext(AuthContext)
  return value
}
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuth: false, name: '' })
  const [error, setError] = useState('')
  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          setAuth({
            isAuth: true,
            name: user.displayName || user.email
          })
        }else{
          setAuth({
            isAuth: false,
            name: ''
          })
        }
      })
  }, [])
  const signOut = async() => {
    try{
      await firebase
        .auth()
        .signOut()
      setAuth({
        isAuth: false,
        name: ''
      })
      navigateTo('/')
    }catch(err){
      navigateTo('/')
    }
  }
  const signIn = (email, passwd) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, passwd)
      .then(() => {
        navigateTo('/restrito')
      })
      .catch(function(error) {
        setError(error.code)
      })
  }
  const authFB = () => {
    const provider = new firebase.auth.FacebookAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // const token = result.credential.accessToken;
        // const user = result.user;
      })
      .catch(function(error) {
        /*
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        */
      })

    }
  return (
    <AuthContext.Provider value={{...auth, authFB, signOut, signIn, error }}>
      {children}
    </AuthContext.Provider>
  )
}