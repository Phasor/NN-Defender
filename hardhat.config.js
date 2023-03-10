require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;
const goerliUrl = process.env.GOERLI_URL;
const etherscanKey = process.env.ETHERSCAN_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: goerliUrl,
      accounts: [privateKey]
    }
  },
  etherscan: {
    apiKey: etherscanKey
  }
};
