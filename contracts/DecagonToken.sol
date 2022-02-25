// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DecagonToken is ERC20 {

    address public admin; 

    constructor (uint256 _initialSupply)ERC20("DecagonToken", "DGT"){
        _mint(msg.sender,  _initialSupply * 10 ** decimals());
        admin = msg.sender;
    }

    function mint(address holder, uint amount) public {
        require(msg.sender == admin, "Only admin can mint token");
        _mint(holder, amount * 10 ** decimals());
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount); 
    }
}