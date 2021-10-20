const Web3  = require('web3')
const jsonInterface = require('../artifacts/contracts/Greeter3.sol/Greeter3.json');
const rpcUrl = "http://localhost:8545";
const account = "0xf26e48c6C76...";
const proxyContractAddress = "0xB4f977A2199906cFa90da70f3Ce974d093bD208D";
const web3 = new Web3(new Web3.providers.HttpProvider(rpcUrl));
async function f() {
  var myContract = new web3.eth.Contract(jsonInterface.abi, proxyContractAddress);

  const a = await myContract.methods.getStringK1().call({"from": account});
  console.log(111, a);
  const a1 = await myContract.methods.getStringK2().call({"from": account});
  console.log(222, a1);
  const a2 = await myContract.methods.getStringK3().call({"from": account});
  console.log(333, a2);
}
f();

