# Simple-dApp

A simple transaction dApp for MUNCoin tokens.

---

## Run:

- `npm install` to install dependencies
- `testrpc -p 9545` to create a  local Ethereum test net
- In another terminal, `truffle compile && truffle migrate --reset`, to compile and deploy the contracts to the test net
- In another terminal, `npm run start`, to run the application

---

**Note**: Ensure your MetaMask network points to `http://localhost:9545`. To do this:

- Click on the MetaMask icon
- Click on the network dropdown in the top left corner
- Select *Custom RPC*
- Type `http://localhost:9545` and click `Save`