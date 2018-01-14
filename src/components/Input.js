import React from 'react'

const Input = ({ label, type, ref, placeholder }) => {
  return (
    <label>
      { label }
      <input type={type} ref={ref} placeholder={placeholder} />
    </label>
  )
}

export default Input
