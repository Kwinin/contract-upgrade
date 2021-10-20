// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
//import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract Data is Initializable, OwnableUpgradeable{
    mapping (string=>string) public stringStorage;

//    function initialize() public initializer {
//        console.log("data admin account: ", msg.sender);
//    }
//    function getData(string memory key) view public returns (uint256 value) {
//        return stringStorage[key];
//    }
//
//    function setData(string memory key, uint256 value) external onlyOwner{
//        console.log("data admin setData account: ", msg.sender);
//        stringStorage[key] = value;
//    }

}
