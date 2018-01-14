import React, { Component } from 'react'
import MUNCoinContract from '../../build/contracts/MUNCoin.json'
import getWeb3 from '../utils/getWeb3'
import contract from 'truffle-contract'
import Input from './Input'

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import './App.css'

import mun_logo from '../imgs/mun_logo.png' 

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      web3: null,
      MUNBalance: 0
    }
    this.handleSubmitTransfer = this.handleSubmitTransfer.bind(this)
  }

  componentDidMount() {
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
    const munCoin = contract(MUNCoinContract)
    munCoin.setProvider(this.state.web3.currentProvider)
    console.log('provider', this.state.web3.currentProvider)

    var munCoinInstance

    this.state.web3.eth.getAccounts((error, accounts) => {
      console.log(accounts)
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

  handleSubmitTransfer(event) {
    let to = this.refs.recepient.value
    let amount = this.refs.amount.value

    this.state.munCoinInstance.transfer(to, amount, {from: this.state.currAddress})
    this.clearForm()

    event.preventDefault()
  }

  clearForm() {
    let toAddr = this.refs.recepient
    let amt = this.refs.amount

    toAddr.value = ''
    amt.value = ''
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
            <img src={mun_logo} alt="MUN logo"/>
            <a href="#" className="pure-menu-heading pure-menu-link">MUNExchange</a>
        </nav>

        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <br/>
              <h1>MUNExchange!</h1>
              <p>Trade items and services within the university using <em>MUNCoin</em></p>
              <hr/>
              <h3>Your Address:&nbsp;</h3><p>{this.state.currAddress}</p>
              <h3>MUNCoin Balance:</h3><p>You have <strong><span>{this.state.MUNBalance}</span></strong> MNC</p>
            </div>
          </div>
          <hr/>
          <div className="pure-g">
            <div className="pure-u-1-1">  
              <form onSubmit={this.handleSubmitTransfer} id="transfer-form">                
                <h3>Transfer MUNCoin</h3>
                <Input label="Amount:&nbsp;" type="text" ref="amount" placeholder="0"/>
                <Input label="To:&nbsp;" type="text" ref="recipient" placeholder="0x..." />
                <br/><br/>
                <input className="pure-button pure-button-primary" type="submit" value="Send" />
              </form>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App
