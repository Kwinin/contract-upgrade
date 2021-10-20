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
  // Deploying
  // const Data = await ethers.getContractFactory("Data");
  // const data = await Data.deploy();
  // await data.deployed();
  // dataAddress = data.address
  // console.log("Data.sol, contract address:", data.address);

  const Greeter = await ethers.getContractFactory("Greeter");
  const proxy = await upgrades.deployProxy(Greeter, []);
  await proxy.deployed();
  console.log("proxy address: ", proxy.address)

  await proxy.setGreeting("k1");
  const k1 = await  proxy.greet();
  console.log("k1 value:", k1)


  const implementation1 = await getImplementationAddress(
    ethers.provider,
    proxy.address);


  const Greeter2 = await ethers.getContractFactory("Greeter2");
  const upgrade = await upgrades.upgradeProxy(proxy.address, Greeter2, []);

  await upgrade.deployed();

  await upgrade.setString("k2");

  const implementation2 = await getImplementationAddress(
    ethers.provider,
    upgrade.address);

  console.log("upgrade address:", upgrade.address);
  console.log("implementation 1 address:", implementation1);
  console.log("implementation 2 address:", implementation2);

  const k2 = await  upgrade.getString();
  console.log("k2 value:", k2)
  const uk1 = await  upgrade.getStringK1();
  console.log("uk1 value:", uk1)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


