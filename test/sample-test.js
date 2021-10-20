const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");
const { getImplementationAddress } = require('@openzeppelin/upgrades-core');

describe("Greeter", function () {
  /*it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });*/

  let dataAddress;
  it('1.Data.sol contract', async function () {
    const [deployer] = await ethers.getSigners();

    console.log(
      "Deploying contracts with the account:",
      await deployer.getAddress()
    );
    // Deploying
    const Data = await ethers.getContractFactory("Data");
    const data = await Data.deploy();
    await data.deployed();
    dataAddress = data.address
    console.log("Data.sol, contract address:", data.address);
    // expect(await data.owner()).to.equal(deployer.address);
  })

  it('works before and after upgrading', async function () {

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
    // const instance = await upgrades.deployProxy(Greeter, []);
    // expect(await instance.greet()).to.equal('hallo');
    //
    // const upgraded = await upgrades.upgradeProxy(instance.address, Greeter2);
    // expect(await upgraded.greet()).to.equal('hallo');
  });


});

