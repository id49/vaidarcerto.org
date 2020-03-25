const Phone = ({ number }) => {
  const ddd = number.substring(0, 2)
  const num1 = number.substring(2, 7)
  const num2 = number.substring(7, 11)
  return `(${ddd}) ${num1}-${num2}`
}

export default Phone
