import React from 'react'

const Form = ({ handleSubmit, children }) => {
  return (
    <div className="pure-g">
      <div className="pure-u-1-1">  
        <form onSubmit={handleSubmit} id="transfer-form">                
          <h3>Transfer MUNCoin</h3>
          {children}
        </form>
      </div>
    </div>          
  )
}

export default Form
