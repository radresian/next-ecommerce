import { useQuery } from '@apollo/client';
import { VIEWER } from '../../apollo/client/queries';

import HeaderMobile from './header-mobile';
import HeaderDesktop from './header-desktop';
import {useCallback} from 'react';
import Web3 from 'web3';

export default function Header() {
  const { data, loading, error, refetch } = useQuery(VIEWER);
  const viewer = data?.viewer;
  const connectWallet = useCallback(()=>{
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable().then(()=>{
        web3.eth.getAccounts().then(accounts=>{
          console.log({accounts});
          web3.eth.personal.sign('Please sign this message to connect BestDrops', accounts[0],function (err, signature) {
            fetch('/api/ethereum?signature='+signature+'&address='+accounts[0]).then(data=>{
              data.text().then((text)=>{
                if(text==='ok'){
                  refetch();
                }
              })
            });
            console.log(signature);  // But maybe do some error checking. :-)
          });
        })});
    }else {
      alert('Please Install Metamask');
    }
  },[]);

  return  (
    <header>
      <nav id="mobile">
        <HeaderMobile viewer={viewer} />
      </nav>

      <nav id="desktop">
        <HeaderDesktop viewer={viewer} connectWallet={connectWallet} />
      </nav>

      <style jsx>{`
        header {
          width: 100vw;
          display: flex;
          flex-direction: column;
          margin-bottom: 30px;
          background-color: #111f57;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
        }
        #mobile {
          display: none;
          z-index: 0;
        }
        @media (max-width: 1000px) {
          #mobile {
            display: flex;
            z-index: 1;
          }
          #desktop {
            display: none;
            z-index: 0;
          }
        }
      `}</style>
    </header>
  );
}
