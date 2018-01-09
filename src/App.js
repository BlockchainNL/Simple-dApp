import React, { Component } from 'react'
import MUNCoinContract from '../build/contracts/MUNCoin.json'
import getWeb3 from './utils/getWeb3'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storageValue: 0,
      web3: null
    }
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  instantiateContract() {

    const contract = require('truffle-contract')

    const munCoin = contract(MUNCoinContract)
    munCoin.setProvider(this.state.web3.currentProvider)

    var munCoinInstance

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      munCoin.deployed().then((instance) => {
        munCoinInstance = instance

        // add contract instance to state
        return this.setState({munCoinInstance: instance})
      }).then((result) => {
        // Get the value from the contract to prove it worked.
        return munCoinInstance.balanceOf.call(accounts[0])
      }).then((result) => {
        // Update state with the result.
        return this.setState({ MUNBalance: result.c[0] })
      })
    })

    this.setState({currAddress: this.state.web3.eth.accounts[0]})

  }

  render() {
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
            <a href="#" className="pure-menu-heading pure-menu-link">MUNExchange</a>
        </nav>

        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>MUNExchange!</h1>
              <p>Trade items and services within the university using <em>MUNCoin</em></p>
              <hr/>
              <h3>Your Address:&nbsp;</h3><p>{this.state.currAddress}</p>
              <h3>MUNCoin Balance:</h3><p>You have <span>{this.state.MUNBalance}</span></p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App
