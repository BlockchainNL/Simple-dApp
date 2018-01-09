var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var MUNCoin = artifacts.require("./MUNCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(MUNCoin);
};
