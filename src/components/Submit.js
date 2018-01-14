import React from 'react'

const Submit = ({ type, value }) => {
  return (
    <div>
      <br/>
      <br/>
      <input className="pure-button pure-button-primary" type={type} value={value} />
    </div>
  )
}

Submit.defaultProps = {
  type: 'submit',
  value: 'Send'
}

export default Submit
      
      
