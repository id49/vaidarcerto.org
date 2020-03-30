import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import firebase from '../components/firebase'
import { Router } from '@reach/router'
import Select from 'react-select'
import states from '../lib/states.json'
import { Link, navigateTo } from 'gatsby'
import SelectCity from '../client-side-routes/SelectCity'
import Listings from '../client-side-routes/Listings'
import CreateListings from '../client-side-routes/CreateListings'
import { useAuth } from '../lib/AuthContext'

const Routes = () => {
  const auth = useAuth()

  // useEffect(() => {
  //   if(!auth.isAuth) {
  //     navigateTo('/')
  //   }
  // }, [])


  return (
    <Router basepath='/restrito'>
      <SelectCity path='/select-city' />
      <SelectCity path='/select-city/:state' />
      <Listings path='/listings/:state/:city' />
      <CreateListings path='/listings/:state/:city/create' />
    </Router>
  )
}

const Restrito = () => {
  return(
    <Layout>
      <div className='container mx-auto mt-12'>
        <h1>Restrito</h1>
        <div>
          <Link to='/restrito/select-city'>Gerenciar empresas de uma cidade</Link>
        </div>
        <Routes />
      </div>
    </Layout>
  )
}
export default Restrito
