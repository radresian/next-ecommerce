import Web3 from 'web3';
import { createUserWithWallet, findUserByWallet, validatePassword } from '../../lib/user'
import {setLoginSession} from '../../lib/auth';

const { alchemyApiKey, mnemonic } = require('../../secret.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');

const web3 = new Web3(new HDWalletProvider(
  mnemonic, `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`
));

export default async (req, res) => {

  const wallet = await web3.eth.personal.ecRecover(' ',req.query.signature);

  if(req.query.address.toLowerCase()==wallet.toLowerCase()){
    console.log(wallet+ ' ok');
    const user = await findUserByWallet({wallet});
    if(user){
      const session = {
        id: user.id,
        email: user.email,
        wallet: user.wallet
      };

      await setLoginSession(res, session);
      res.send('ok');

    }else {
      const user = await createUserWithWallet({wallet})
      const session = {
        id: user.id,
        wallet: user.wallet
      };
      await setLoginSession(res, session)
      res.send('ok');
    }
  }else{
    console.log(wallet+ ' fail for' + req.query.address);
    res.send('fail');
  }

}
