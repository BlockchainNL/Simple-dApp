var MUNCoin = artifacts.require("./MUNCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(MUNCoin);
};
