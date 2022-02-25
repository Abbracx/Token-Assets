const DecagonToken = artifacts.require("DecagonToken");
const TokenSale = artifacts.require("TokenSale")
module.exports = async function(deployer) {

  const addresses = web3.eth.getAccounts();
  await deployer.deploy(DecagonToken, 10000);
  await deployer.deploy(TokenSale, 1, addresses[0], DecagonToken.address)
  //Next take care of sending money from addresses[0] to TokenSale address
  //Token Sale needs to own the contract to destribute
  token = await DecagonToken.deployed()
  await token.transfer(TokenSale.address, 10000)
};
