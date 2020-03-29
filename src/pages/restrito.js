import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useAuth } from '../lib/AuthContext'
import { useStaticQuery } from 'gatsby'

const ValidateEmail = () => {
  const auth = useAuth()
  const [emailSent, setEmailSent] = useState(false)
  const [emailProblem, setEmailProblem] = useState(false)
  const sendEmail = async() => {
    try{
      setEmailProblem(false)
      await auth.sendEmailConfirmation()
      setEmailSent(true)
    }catch(err){
      setEmailProblem(true)
    }
  }
  if(!auth.emailVerified){
    return (
      <div className='bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4' role='alert'>
        <p className='font-bold'>Atenção</p>
        <p>Preciamos confirmar seu e-mail antes que você possa fazer qualquer operação.</p>
        { !emailSent && <p>Caso você não tenha recebido um email nosso, <button onClick={sendEmail}>clique aqui para reenviar</button>.</p> }
        { emailSent && <p>Enviamos um email para: {auth.email}. Por favor, cheque sua caixa de entrada.</p> }
        { emailProblem && <p>Estamos com problemas para enviar o email no momento. Tente novamente em alguns minutos.</p> }
      </div>
    )
  }
  return null
}

const Restrito = () => {
  return(
    <Layout>
      <div className='container mx-auto mt-12'>
        <ValidateEmail />
        <h1>Restrito</h1>
        <p>Estamos preparando novidades :)</p>
      </div>
    </Layout>
  )
}
export default Restrito
