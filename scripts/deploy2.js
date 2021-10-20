// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers, upgrades } = require("hardhat");
const { getImplementationAddress } = require('@openzeppelin/upgrades-core');

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    await deployer.getAddress()
  );


  const Greeter3 = await ethers.getContractFactory("Greeter3");
  const upgrade = await upgrades.upgradeProxy("0xB4f977A2199906cFa90da70f3Ce974d093bD208D", Greeter3, []);

  await upgrade.deployed();

  await upgrade.setString("k3");

  const implementation2 = await getImplementationAddress(
    ethers.provider,
    upgrade.address);


  console.log("upgrade address:", upgrade.address);
  console.log("implementation 2 address:", implementation2);

  const uk2 = await  upgrade.getStringK2();
  console.log("uk2 value:", uk2);
  const uk1 = await  upgrade.getStringK1();
  console.log("uk1 value:", uk1);
  const k3 = await  upgrade.getStringK3();
  console.log("k3 value:", k3);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


