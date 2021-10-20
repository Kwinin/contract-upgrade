//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/ERC1967/ERC1967UpgradeUpgradeable.sol";
import "./Data.sol";
import "hardhat/console.sol";
//import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract Greeter is Initializable,ERC1967UpgradeUpgradeable, OwnableUpgradeable, Data{
    function initialize() public initializer {
        __ERC1967Upgrade_init();
        __Ownable_init();
        //        console.log("Deploying a Greeter with greeting:", _greeting);
        //        console.log("At address: ", address(this));
        console.log("greeter account:", msg.sender);
//        transferOwnership(msg.sender);
    }

    function greet() public view returns (string memory) {
        return stringStorage["Kwinin1"];

    }

    function setGreeting(string memory _greeting) public onlyOwner{
        //    console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
//        data.setData("Kwinin1", _greeting);
        console.log("setGreeting account", msg.sender);
        stringStorage["Kwinin1"] = _greeting;
    }
}
