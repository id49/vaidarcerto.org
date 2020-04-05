import React, { useEffect, useState } from 'react'
import firebase from '../../components/firebase'
import Card from '../../components/CardRestrito'

const ListingsPending = ({ state, city }, ...props) => {
  const [listings, setListings] = useState([])
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('listings-new')
      .where('status', '==', 'pending')
      .onSnapshot(snap => {
        const listings = snap.docs.map(doc => {
          const listing = {
            id: doc.id,
            ...doc.data()
          }
          return listing
        })
        setListings(listings)
      })
      return () => {
        unsubscribe()
      }
  }, [city, state])
  
  return (
    <React.Fragment>
      <h1 className='font-bold text-xl'>Gerenciando empresas pendentes de revisão</h1>
      {listings.map((listing, index) => <Card review={true} key={listing.id} id={listing.id} name={listing.name} description={listing.description} contacts={listing.contacts} status={listing.status} city={listing.city} state={listing.state} />)}
      {
        listings.length === 0 && <div className="my-8 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
          <p>Nenhuma empresa/profissional pendente de revisão.</p>
        </div>
      }
    </React.Fragment>
  )
}
export default ListingsPending
