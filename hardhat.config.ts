import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const METAMASK_PRIVATE_KEY = process.env.METAMASK_PRIVATE_KEY;
const SEPOLIA_API_URL = process.env.SEPOLIA_API_URL;

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: SEPOLIA_API_URL,
      accounts: [`0x${METAMASK_PRIVATE_KEY}`],
    },
  },
};

export default config;
