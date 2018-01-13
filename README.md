# Simple-dApp

A simple transaction dApp for MUNCoin tokens.

---

## Run:

- `npm install` to install dependencies
- `testrpc -p 9545` to create a  local Ethereum test net
- In another terminal, `truffle compile && truffle migrate --reset`, to compile and deploy the contracts to the test net
- In another terminal, `npm run start`, to run the application


**Note**: If you have the MetaMask browser extension installed, ensure it points to *Private Network* . To do this:

- Click on the MetaMask icon
- Click on the network dropdown in the top left corner
- Select *Custom RPC*
- Type `http://localhost:9545` and click `Save`

---

## Test:

- After compiling and deploying the contracts to your local RPC network
- `truffle test` to test the smart contract
  - Ignore `Error: VM Exception while processing transaction: out of gas` if it shows up. Your machine may not be generating new blocks fast enough, so the test times out 
- `truffle test ./test/muncoin.js`