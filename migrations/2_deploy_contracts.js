const DecagonToken = artifacts.require("DecagonToken");
const TokenSale = artifacts.require("TokenSale")
const KycContract = artifacts.require("KycContract")

module.exports = async function(deployer, _network, address) {

  [owner, _] = address;
  await deployer.deploy(DecagonToken, 10000);
  await deployer.deploy(KycContract)
  await deployer.deploy(TokenSale, 1, owner, DecagonToken.address, KycContract.address);

  //Next take care of sending money from addresses[0] to TokenSale address
  //Token Sale needs to own the contract to destribute
  token = await DecagonToken.deployed();
  await token.transfer(TokenSale.address, 10000);
};
