//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/ERC1967/ERC1967UpgradeUpgradeable.sol";
import "./Data.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract Greeter2 is Initializable,ERC1967UpgradeUpgradeable, OwnableUpgradeable, Data{
   function initialize() public initializer {
        __ERC1967Upgrade_init();
//        __Ownable_init();
  }

  function setString(string memory _number) external onlyOwner{
      console.log("setString account", msg.sender);
      stringStorage["Kwinin2"] = _number;
  }

  function getString() public view returns(string memory){
      return stringStorage["Kwinin2"];
  }
    function getStringK1() public view returns(string memory){
        return stringStorage["Kwinin1"];
    }
}
