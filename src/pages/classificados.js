import React, { useEffect } from 'react'
import firebase from '../components/firebase'



const Classificados = () => {
  useEffect(() => {
    firebase.firestore().collection('listings').get().then(snap => {
      snap.docs.forEach(doc => {
        console.log(doc.data())
      })
    })
  })
  return <h1>Classificados</h1>
}
export default Classificados
