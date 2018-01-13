var MUNCoin = artifacts.require("./MUNCoin.sol");

contract('MUNCoin', function(accounts) {

  it("...should return the total supply value of 25000000.", function() {
    return MUNCoin.deployed().then(function(instance) {
      munCoinInstance = instance;

      return munCoinInstance.totalSupply.call();
    }).then(function(totalSupply) {
      assert.equal(totalSupply, 25000000, "The total supply value 25000000 was not received.");
    });
  });

});
