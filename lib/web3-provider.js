import Web3 from 'web3';
const { alchemyApiKey, mnemonic } = require('./secret.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');


export default function getWeb3(){
  //return new Web3('ws://localhost:8545');
  return new Web3(new HDWalletProvider(
    mnemonic, `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`
  ));
}
