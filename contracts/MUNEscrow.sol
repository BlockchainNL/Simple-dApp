pragma solidity ^0.4.16;

import "./MUNCoin.sol";

contract MUNEscrow {

  address public buyer;
  address public seller;
  address public arbiter;
  
  function MUNEscrow(address _seller, address _arbiter) public {
    buyer = msg.sender;
    seller = _seller;
    arbiter = _arbiter;
  }
  
  function payoutToSeller() public {
    if(msg.sender == buyer || msg.sender == arbiter) {
      seller.transfer(this.balance);
    }
  }
  
  function refundToBuyer() public {
    if(msg.sender == seller || msg.sender == arbiter) {
      buyer.transfer(this.balance);
    }
  }
  
  function getBalance() public constant returns (uint) {
    return this.balance;
  }

}