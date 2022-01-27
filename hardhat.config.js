require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
// const fs = require('fs');
// const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
const infuraId = process.env.STAGING_ALCHEMY_KEY

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    
    mumbai: {
      // Infura
      url: `https://polygon-mumbai.g.alchemy.com/v2/${infuraId}`,
      // url: "https://rpc-mumbai.matic.today",
      accounts: [process.env.PRIVATE_KEY]
    },
    // matic: {
    //   // Infura
    //   url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
    //   // url: "https://rpc-mainnet.maticvigil.com",
    //   accounts: [process.env.PRIVATE_KEY]
    // }
  
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