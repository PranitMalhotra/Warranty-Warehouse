require("@nomiclabs/hardhat-waffle");
const fs = require("fs");

const privateKey = fs.readFileSync(".secret").toString();
const projectID = fs.readFileSync(".projectId").toString();


module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mainnet: {
      url: `https://rpc-mainnet.maticvigil.com/v1/${projectID}`,
      accounts: [privateKey]
    },
    mumbai: {
      url: `https://rpc-mumbai.maticvigil.com/v1/${projectID}`,
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
