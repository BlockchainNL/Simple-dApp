import React, { Component } from 'react'
import MUNCoinContract from '../../build/contracts/MUNCoin.json'
import getWeb3 from '../utils/getWeb3'
import contract from 'truffle-contract'
import Input from './Input'
import Navigation from './Navigation'
import Form from './Form'
import Main from './Main'
import Submit from './Submit'

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      web3: null,
      balance: 0,
      currentAddress: null,
      sendAddress: null,
      sendAmount: null
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
        return this.setState({ balance: result.c[0] })
      })
    })

    this.setState({currentAddress: this.state.web3.eth.accounts[0]})

  }

  handleSubmitTransfer(event) {
    const { sendAddress, sendAmount } = this.state

    this.state.munCoinInstance.transfer(sendAddress, sendAmount, {from: this.state.currentAddress})
    this.clearForm()

    event.preventDefault()
  }

  clearForm() {
    const sendAddress = null
    const sendAmount = null

    this.setState({ sendAddress, sendAmount })
  }

  handleInputChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    const { currentAddress, balance, sendAddress, sendAmount } = this.state

    return (
      <div className="App">
        <Navigation />
        <Main currentAddress={currentAddress} balance={balance} />
          <Form handleSubmit={ this.handleSubmitTransfer } >
                <Input name="sendAmount" value={sendAmount} handleChange={this.handleInputChange} label="Amount:&nbsp;" type="text" placeholder="0"/>
                <Input name="sendAddress" value={sendAddress} handleChange={this.handleInputChange} label="To:&nbsp;" type="text" placeholder="0x..." />
                <Submit type='submit' value='Send' />
          </Form>
      </div>
    );
  }
}

export default App
