import { createUserWithWallet, findUserByWallet, validatePassword } from '../../lib/user'
import {setLoginSession} from '../../lib/auth';
import web3 from './web3-provider'

export default async (req, res) => {

  const wallet = await web3.eth.personal.ecRecover('Please sign this message to connect BestDrops',req.query.signature);

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
