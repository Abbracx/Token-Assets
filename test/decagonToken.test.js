require("@openzeppelin/test-helpers/configure")({
  provider: "http://localhost:8545",
});
const {
  BN, // Big Number support
  constants, // Common constants, like the zero address and largest integers
  expectEvent, // Assertions for emitted events
  expectRevert, // Assertions for transactions that should fail
} = require("@openzeppelin/test-helpers");
const DecagonToken = artifacts.require("DecagonToken");

describe("Decagon ERC20", function ([sender, receiver]) {
  beforeEach(async function () {
    // The bundled BN library is the same one web3 uses under the hood
    this.value = new BN(1);

    this.decagon_erc20 = await DecagonToken.new({from: sender});
  });

  it("reverts when transferring tokens to the zero address", async function () {
    // Conditions that trigger a require statement can be precisely tested
    await expectRevert(
      this.decagon_erc20.transfer(constants.ZERO_ADDRESS, this.value, {
        from: sender,
      }),
      "ERC20: transfer to the zero address"
    );
  });

  it("emits a Transfer event on successful transfers", async function () {
    const receipt = await this.decagon_erc20.transfer(receiver, this.value, {
      from: sender,
    });
    truff;

    // Event assertions can verify that the arguments are the expected ones
    expectEvent(receipt, "Transfer", {
      from: sender,
      to: receiver,
      value: this.value,
    });
  });

  it("updates balances on successful transfers", async function () {
    this.decagon_erc20.transfer(receiver, this.value, { from: sender });

    // BN assertions are automatically available via chai-bn (if using Chai)
    expect(await this.decagon_erc20.balanceOf(receiver)).to.be.bignumber.equal(
      this.value
    );
  });
});
