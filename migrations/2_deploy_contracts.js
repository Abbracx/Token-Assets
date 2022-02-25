const DecagonToken = artifacts.require("DecagonToken");

module.exports = async function(deployer) {
  const token = await deployer.deploy(DecagonToken, 10000);
};
