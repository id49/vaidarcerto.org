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
            name: user.displayName || user.email,
            emailVerified: user.emailVerified,
            email: user.email
          })
        }else{
          setAuth({
            isAuth: false,
            name: '',
            emailVerified: false
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
        name: '',
        emailVerified: false
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
  const sendEmailConfirmation = async() => {
    const user = firebase.auth().currentUser
    await user.sendEmailVerification()
    return true
  }
  return (
    <AuthContext.Provider value={{...auth, authFB, signOut, signIn, error, sendEmailConfirmation }}>
      {children}
    </AuthContext.Provider>
  )
}