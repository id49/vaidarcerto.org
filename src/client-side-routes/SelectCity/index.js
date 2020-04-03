import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import AsyncSelect from 'react-select/async'
import { navigateTo } from 'gatsby'
import states from '../../lib/states.json'
import axios from 'axios'

const STATES = states.sort((a, b) => a.state > b.state ? 1 : -1).map(state => {
  return {
    value: state.abbr,
    label: state.state + ' (' + state.abbr + ')'
  }
})

const SelectCity = ({ state }, ...props) => {
  const selected = STATES.find(s => s.value === state)
  const loadOptions = (input, callback) => {
    if(input.length < 3){
      return callback([])
    }
    axios
    .get('http://localhost:5001/vaidarcerto-org/us-central1/api/city/'+state+'?str='+input)
    .then(res => {
      callback(res.data)
    })
  }
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
      { selected && <AsyncSelect loadOptions={loadOptions} onChange={goToCity} placeholder='Selecionar cidade' /> }
    </div>
  )
}

export default SelectCity
