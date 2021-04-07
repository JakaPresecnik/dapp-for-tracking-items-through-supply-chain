const HDWalletProvider = require('truffle-hdwallet-provider');

const infuraKey = 'infura key here';
const mnemonic = 'wallet mnemonic phrase here';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      websockets: true
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, infuraKey),
      network_id: 4,
      gas: 5500000,  
      gasPrice: 10000000000
     },
  },
  compilers: {
    solc: {
      version:"0.4.24"
    }
  },
};