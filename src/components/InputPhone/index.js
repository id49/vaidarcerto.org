import React from 'react'
import InputMask from 'react-text-mask'

const mobileMask = [
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
const phoneMask = [
  '(',
  /\d/,
  /\d/,
  ')',
  ' ',
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
const masks = {
  fixo: phoneMask,
  whatsapp: mobileMask
}

const InputPhone = ({type, ...props}) => {
  const mask = masks[type]
  return <InputMask guide mask={mask} {...props} />
}

export default InputPhone
