import React, { useEffect, useState } from 'react'
import firebase from '../../components/firebase'
import { Link, navigateTo } from 'gatsby'

const Listings = ({ state }, ...props) => {
  const [cities, setCities] = useState([])
  useEffect(() => {
    /*
    firebase
      .firestore()
      .collection('cities')
      .where('state', '==', selected.value)
      .get()
      .then(snap => {
        const cities = snap.docs.map(doc => {
          const city = doc.data()
          return { value: city.slug, label: city.name }
        })
        setCities(cities)
      })*/
  }, [])
  const goToState = st => {
    navigateTo('/restrito/listings/' + st.value)
  }
  const goToCity = c => {
    navigateTo('/restrito/listings/' + state + '/' + c.value)
  }

  return (
    <React.Fragment>
      <h2>Restritos <Link to='/restrito/listings/MG'>MG</Link> <Link to='/restrito/listings'>None</Link></h2>
      
    </React.Fragment>
  )
}
export default Listings
