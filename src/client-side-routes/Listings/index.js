import React, { useEffect, useState } from 'react'
import firebase from '../../components/firebase'
import { navigateTo } from 'gatsby'
import Card from '../../components/CardRestrito'

const Listings = ({ state, city }, ...props) => {
  const [listings, setListings] = useState([])
  useEffect(() => {
    console.log(city, state)
    firebase
      .firestore()
      .collection('listings-new')
      .where('state', '==', state)
      .where('city', '==', city)
      .orderBy('name')
      .get()
      .then(snap => {
        const listings = snap.docs.map(doc => {
          console.log(doc.data())
          const listing = doc.data()
          return listing
        })
        setListings(listings)
      }).catch(err => console.log(err))
  }, [city, state])
  
  const goToCreateListing = () => {
    navigateTo(`/restrito/listings/${state}/${city}/create`)
  }

  return (
    <React.Fragment>
      <h1 className='font-bold text-xl'>Gerenciando empresas de: {city} / {state}</h1>
      <button type='button' onClick={goToCreateListing} className="mt-3 text-lg font-semibold bg-gray-800 text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
        Nova Empresa
      </button>
      {listings.map((listing, index) => <Card key={index.toString()} name={listing.name} description={listing.description} contacts={listing.contacts} status={listing.status} review={false} />)}
      {
        listings.length === 0 && <div className="my-8 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
          <p>Nenhuma empresa/profissional nesta cidade. Ajude-nos cadastrando o primeiro :) </p>
        </div>
      }
    </React.Fragment>
  )
}
export default Listings
