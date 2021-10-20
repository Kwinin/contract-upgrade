//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/ERC1967/ERC1967UpgradeUpgradeable.sol";
import "./Data.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract Greeter3 is Initializable,ERC1967UpgradeUpgradeable, OwnableUpgradeable, Data{
    function initialize() public initializer {
        __ERC1967Upgrade_init();
        //        __Ownable_init();
    }

    function setString(string memory _number) external onlyOwner{
        console.log("setString account", msg.sender);
        stringStorage["Kwinin3"] = _number;
    }

    function getStringK1() public view returns(string memory){
        return stringStorage["Kwinin1"];
    }

    function getStringK2() public view returns(string memory){
        return stringStorage["Kwinin2"];
    }

    function getStringK3() public view returns(string memory){
        return stringStorage["Kwinin3"];
    }
}
