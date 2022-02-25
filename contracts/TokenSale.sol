// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "./Crowdsale.sol";
contract TokenSale is Crowdsale {
    constructor(
        uint256 rate,    // rate in TKNbits
        address payable wallet, // If you send money to the crowdsale the wallet gets an amount of token
        IERC20 token
    )
        Crowdsale(rate, wallet, token)
    {

    }
}
