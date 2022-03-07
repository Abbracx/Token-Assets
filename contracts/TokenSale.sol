// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "./Crowdsale.sol";
import "./KycContract.sol";

contract TokenSale is Crowdsale {

    KycContract kyc;
    constructor(
        uint256 rate,    // rate in TKNbits
        address payable wallet, // If you send money to the crowdsale the wallet gets an amount of token
        IERC20 token,
        KycContract _kyc
    )
        Crowdsale(rate, wallet, token)
    {
        kyc = _kyc;
    }

    // Makes sure beneficiary is not adress zero (0x0)
    // Makes sure amount is not zero
    // Makes sure beneficiary is whitelisted
    function _preValidatePurchase(address beneficiary, uint256 weiAmount) internal view override{
        super._preValidatePurchase(beneficiary, weiAmount);
        require(kyc.kycCompleted(beneficiary),"KYC not completed, purchase not allowed..");
    }
        
}
