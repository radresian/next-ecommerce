import getWeb3 from './web3-provider'
import enefturkContract from './Enefturk.json';

export default async function mint(wallet, productId){
  const web3 = getWeb3();

  var contract = new web3.eth.Contract(enefturkContract.abi, '0xeeee65a6f4f27ef32a8ac50163584919f18e8592');
  //var contract = new web3.eth.Contract(enefturkContract.abi, '0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab');

  console.log('wallet:' + wallet + ' id:' + productId);

  const gasRequired = await contract.methods.mint(wallet,productId).estimateGas({from:'0x2E20e921d16Cd31dfEeA9beFDAb9A5480634CaB9'});
  console.log('gasRequired:' + gasRequired);

  const result = await contract.methods.mint(wallet,productId).send({from:'0x2E20e921d16Cd31dfEeA9beFDAb9A5480634CaB9', gas: gasRequired*2});
  //const result = await contract.methods.mint(wallet,productId).send({from:'0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1', gas:3000000});

  console.log(result);

  return result;
}
