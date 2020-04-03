import React from 'react'
import InputMask from 'react-text-mask'

const InputPhone = props => {
  const mask = [
    '(',
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ]
  return <InputMask guide mask={mask} {...props} />
}

export default InputPhone
