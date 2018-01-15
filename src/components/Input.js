import React from 'react'

const Input = ({ name, value, handleChange, label, type, placeholder }) => {
  return (
    <label>
      { label }
      <input name={name} value={value || ''} onChange={handleChange} type={type} placeholder={placeholder} />
    </label>
  )
}

Input.defaultProps = {
  label: '',
  type: 'text',
  placeholder: ''
}

export default Input
