import Web3 from 'web3';
const { alchemyApiKey, mnemonic } = require('../secret.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');


if(!global.web3) {
  global.web3 = new Web3('ws://localhost:8545');
  //global.web3 = new Web3(new HDWalletProvider(
  //  mnemonic, `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`
  //));

  console.log('web3 created');
}

export default global.web3;
