var StandartToke = artifacts.require("./TOTOToken.sol");
var PayableContract = artifacts.require("./PayableContract.sol");

module.exports = function(deployer) {
    deployer.deploy(StandartToke)
    deployer.deploy(PayableContract);
};