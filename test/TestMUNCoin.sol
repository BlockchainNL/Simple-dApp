pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/MUNCoin.sol";

contract TestMUNCoin {

  function testItReturnsTotalSupply() public {
    MUNCoin munCoin = MUNCoin(DeployedAddresses.MUNCoin());

    uint expected = 25000000;

    Assert.equal(munCoin.totalSupply(), expected, "It should return the value 25000000.");
  }

}
