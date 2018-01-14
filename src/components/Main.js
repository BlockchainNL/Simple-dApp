import React from 'react'

const Main = ({ currentAddress, balance, children }) => {
  return (
    <main className="container">
      <div className="pure-g">
        <div className="pure-u-1-1">
          <br/>
          <h1>MUNExchange!</h1>
          <p>Trade items and services within the university using <em>MUNCoin</em></p>
          <hr/>
          <h3>Your Address:&nbsp;</h3><p>{currentAddress}</p>
          <h3>MUNCoin Balance:</h3><p>You have <strong><span>{balance}</span></strong> MNC</p>
        </div>
      </div>
      <hr/>
      {children}
    </main>
  )
}

export default Main
