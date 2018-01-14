import React from 'react'

const Input = ({ label, type, ref, placeholder }) => {
  return (
    <label>
      { label }
      <input type={type} ref={ref} placeholder={placeholder} />
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
