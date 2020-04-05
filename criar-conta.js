import React, { useEffect, useState } from 'react'
import firebase from '../components/firebase'



const CriarConta = () => {
  const [ confirmationResult, setConfirmationResult ] = useState(null)
  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: function(response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // onSignInSubmit();
        console.log('recaptcha', response)
      }
    })
  })
  const signIn = async() => {
    const phoneNumber = '+5535999516658'
    firebase.auth().signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
      }).catch(function (error) {
        // Error; SMS not sent
        // ...
      })
  }

  return(
    <div>
      <h1>Criar conta</h1>
      <button id='sign-in-button' onClick={signIn}>Go!</button>
    </div>
  )
}
export default CriarConta
