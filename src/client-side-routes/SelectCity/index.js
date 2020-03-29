import React, { useEffect, useState } from 'react'
import firebase from '../../components/firebase'
import Select from 'react-select'
import { navigateTo } from 'gatsby'
import states from '../../lib/states.json'

const STATES = states.sort((a, b) => a.state > b.state ? 1 : -1).map(state => {
  return {
    value: state.abbr,
    label: state.state + ' (' + state.abbr + ')'
  }
})

const SelectCity = ({ state }, ...props) => {
  const selected = STATES.find(s => s.value === state)
  const [cities, setCities] = useState([])
  useEffect(() => {
    if(selected){
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
        })
    }
  }, [selected])
  const goToState = st => {
    navigateTo('/restrito/select-city/' + st.value)
  }
  const goToCity = c => {
    navigateTo('/restrito/listings/' + state + '/' + c.value)
  }

  return (
    <div className='m-12'>
      <h2 className='font-bold'>Selecionar cidade</h2>
      <Select options={STATES} defaultValue={selected} value={selected} onChange={goToState} placeholder='Selecionar estado...' />
      { selected && cities && <Select  options={cities} onChange={goToCity} placeholder='Selecionar cidade' /> }
    </div>
  )
}

export default SelectCity
