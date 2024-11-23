//

require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.27",
  networks: {
    sepolia : {
      url: 'https://eth-sepolia.g.alchemy.com/v2/x2RLKuF0yMoVl_R2_rROONWHCwQXiTKl',
      accounts: ['b48590bf5ac26e0d5b143cdd3cf5d0361d108db93849b1348a03df40aeda498e']
    }
  }
};
