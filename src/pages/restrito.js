import React from 'react'
import Layout from '../components/Layout'
import firebase from '../components/firebase'
import { Router } from '@reach/router'
import Select from 'react-select'
import states from '../lib/states.json'
import { Link } from 'gatsby'

const STATES = states.sort((a, b) => a.state > b.state ? 1 : -1).map(state => {
  return {
    value: state.abbr,
    label: state.state + ' (' + state.abbr + ')'
  }
})

const Listings = ({ state }, ...props) => {
  return (
    <React.Fragment>
      <h2>Restritos <Link to='/restrito/listings/MG'>MG</Link></h2>
      <Select options={STATES} defaultValue={state} />
      <pre>{state} / {JSON.stringify(props, null, 2)}</pre>
    </React.Fragment>
  )
}

const Restrito = () => {
  const add = () => {
    firebase
      .firestore()
      .collection('listings')
      .add({
        status: 'pending'
      })
  }
  return(
    <Layout>
      <div className='container mx-auto mt-12'>
        <h1>Restrito</h1>
        <p onClick={add}>Estamos preparando novidades :)</p>
        <Router basepath='/restrito'>
          <Listings path='/listings' />
          <Listings path='/listings/:state' />
          <Listings path='/listings/:state/:city' />
        </Router>
      </div>
    </Layout>
  )
}
export default Restrito
