import React, { createContext, useContext, useEffect, useState } from 'react'
import firebase from '../components/firebase'
import { navigateTo } from 'gatsby'

export const AuthContext = createContext()

export const useAuth = () => {
  const value = useContext(AuthContext)
  return value
}
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuth: false, name: '', isAuthReady: false, role: 'user' })
  const [error, setError] = useState('')
  const db = firebase.firestore()
  useEffect(() => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          setAuth({
            isAuth: true,
            name: user.displayName || user.email,
            isAuthReady: true,
            uid: user.uid
          })
        }else{
          setAuth({
            isAuth: false,
            name: '',
            isAuthReady: true
          })
        }
      })
      return () => {
        unsubscribe()
      }
  }, [])
  useEffect(() => {
    // checking user role
    let unsubscribe = null
    if(auth.uid){
      unsubscribe = db
        .collection('users')
        .doc(auth.uid)
        .onSnapshot(doc => {
          const user = doc.data()
          if(user){
            setAuth(oldAuth => {
              return {
                ...oldAuth,
                role: user.role
              }
            })
          }
        })
    }
    return () => {
      if(unsubscribe){
        unsubscribe()
      }
    }
  }, [auth.isAuthReady, auth.isAuth, auth.uid])
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
      .catch(error => {
        setError('E-mail ou senha inválidos.')
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