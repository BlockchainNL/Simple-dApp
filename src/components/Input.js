import React from 'react'

const Input = ({ name, value, handleChange, label, type, ref, placeholder }) => {
  return (
    <label>
      { label }
      <input name={name} value={value} onChange={handleChange} type={type} ref={ref} placeholder={placeholder} />
    </label>
  )
}

Input.defaultProps = {
  label: '',
  type: 'text',
  ref: null,
  placeholder: ''
}

export default Input
