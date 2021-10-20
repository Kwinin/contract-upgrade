# Hardhat Project
### Current project uses openzeppelin, Use the plug-in to verify on the ethscan and bscscan
### [*Verify Address*](https://testnet.bscscan.com/address/0x6064a2D77ceb06369F2A001d1AE9184ee83B46B3#code)

### 1. project init
```shell script
npm init --yes

npm install --save-dev hardhat

npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-etherscan @openzeppelin/hardhat-upgrades
```

### 2. write config
Get the APIkey address under [ethScan](https://etherscan.io/myapikey) or [bscScan](https://bscscan.com/myapikey) personal information 
```shell script
cp hardhat.config.js.example hardhat.config.js

// modify hardhat.config.js
const INFURA_PROJECT_ID = "00e8...2b41";
const ROPSTEN_PRIVATE_KEY = "07f1c38b7318fc6bd5e958...e3";
apiKey: "EQF6AY17HK1574GNC...", // eth
```
### 3. execute hardhat
```shell script
npx hardhat compile

npx hardhat run scripts/deploy.js --network testnet

npx hardhat verify  --network testnet 0x6064a2D77ceb06369F2A001d1AE9184ee83B46B3  --contract  contracts/SimpleToken.sol:SimpleToken --constructor-args arguments.js --show-stack-traces

```

### project structure
```shell
tree -I '*artifacts|*node_module*|cache'
.
├── Readme.md
├── arguments.js
├── contracts
│   └── SimpleToken.sol
├── hardhat.config.js
├── package-lock.json
├── package.json
├── scripts
│   └── deploy.js
└── test
```
```shell script
npx hardhat flatten contracts/Greeter2.sol > output.sol

```
