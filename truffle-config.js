require('babel-register');
require('babel-polyfill'); 
require('dotenv').config();

module.exports = {

  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
  },

  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis', 

  compilers: {
    solc: {
      version: "0.5.1",    
      settings: {        
      optimizer: {
         enabled: true,
         runs: 200
       },
       evmVersion: "byzantium"
      }
    },
  },
};
