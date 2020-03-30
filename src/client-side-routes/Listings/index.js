import React, { useEffect, useState } from 'react'
import firebase from '../../components/firebase'
import { Link, navigateTo } from 'gatsby'

import Card from '../../components/Card'

const Listings = ({ state, city }, ...props) => {
  const [listings, setListings] = useState([])
  useEffect(() => {
    firebase
      .firestore()
      .collection('listings')
      .where('uf', '==', state)
      .where('city', '==', city)
      .get()
      .then(snap => {
        const listings = snap.docs.map(doc => {
          const listing = doc.data()
          return listing
        })
        setListings(listings)
      })
  }, [])
  
  const goToCreateListing = () => {
    navigateTo(`/restrito/listings/${state}/${city}/create`)
  }

  return (
    <React.Fragment>
      <h2>Restritos <Link to='/restrito/listings/MG'>MG</Link> <Link to='/restrito/listings'>None</Link></h2>
      <button type='button' onClick={goToCreateListing} className="mt-3 text-lg font-semibold bg-gray-800 text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
        Nova Empresa
      </button>
      {listings.map((listing, index) => <Card key={index.toString()} name={listing.name} description={listing.description} contacts={listing.contacts} />)}
    </React.Fragment>
  )
}
export default Listings
