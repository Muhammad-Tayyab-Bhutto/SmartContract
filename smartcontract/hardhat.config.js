require("@nomiclabs/hardhat-ethers");
const ethers = require('ethers');

module.exports = {
  solidity: "0.8.0",
  defaultNetworks: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url:'https://eth-sepolia.g.alchemy.com/v2/lDxxt5NO42jDH9Pl7KT_2QlzU9fA6mmf',
      accounts: ['183f53821b03c71eaeb5a459492779640d0ad9f9b5287e4a409636de24106a2f']
    }
  },
}