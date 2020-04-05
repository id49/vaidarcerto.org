import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { Router } from '@reach/router'
import { Link, navigateTo } from 'gatsby'
import SelectCity from '../client-side-routes/SelectCity'
import Listings from '../client-side-routes/Listings'
import CreateListings from '../client-side-routes/CreateListings'
import ListingsPending from '../client-side-routes/ListingsPending'
import { useAuth } from '../lib/AuthContext'

const Home = () => {
  const auth = useAuth()
  return (
    <React.Fragment>
      <h1 className='font-bold text-lg'>Seja bem-vindo a área restrita do VaiDarCerto.org</h1>
      <p>Esta área permite que você contribua para o VaiDarCerto.org. Neste momento, estamos aceitando o cadastro de novas empresas que estão trabalhando durante a quarentena. Vale lembrar que as empresas passam por uma revisão.</p>
      <div className='my-4 grid grid-cols-2 gap-2'>
        <Link className='text-center border-2 py-8 px-6 block hover:bg-gray-200 bg-gray-100 max-w-md' to='/restrito/select-city'>
          Gerenciar empresas de uma cidade
        </Link>
      { (auth.role === 'reviewer' || auth.role === 'admin') &&
        <Link className='text-center border-2 py-8 px-6 block hover:bg-gray-200 bg-gray-100 max-w-md' to='/restrito/pending'>
          Gerenciar empresas pendentes de revisão
        </Link>
        }
      </div>
    </React.Fragment>
  )
}

const Routes = () => {
  const auth = useAuth()

  useEffect(() => {
    if(auth.isAuthReady && !auth.isAuth) {
      navigateTo('/')
    }
  }, [auth.isAuthReady, auth.isAuth])


  return (
    <Router basepath='/restrito'>
      <Home path='/' />
      <SelectCity path='/select-city' />
      <SelectCity path='/select-city/:state' />
      <Listings path='/listings/:state/:city' />
      <ListingsPending path='/pending' />
      <CreateListings path='/listings/:state/:city/create' />
    </Router>
  )
}

const Restrito = () => {
  return(
    <Layout>
      <div className='container mx-auto mt-12'>
        <Routes />
      </div>
    </Layout>
  )
}
export default Restrito
