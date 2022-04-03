import { useQuery } from '@apollo/client';
import { VIEWER } from '../../apollo/client/queries';

import HeaderMobile from './header-mobile';
import HeaderDesktop from './header-desktop';
import {useCallback} from 'react';
import Web3 from 'web3';
import Page from "../page";

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
        <div className="wrap">
          <video loop autoPlay muted>
              <source
                src="//videos.ctfassets.net/hrltx12pl8hq/19HiBJyxSSZJvV5J5e2BT1/0576316c49ca1903bf25ea34818d7250/VHP_3-24.mp4"
                type="video/mp4" />
          </video>
        </div>

      </nav>

      <style jsx>{`
        header {
          width: 100vw;
          display: flex;
          flex-direction: column;
          margin-bottom: 30px;
          background-color: #040277;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
        }
        .wrap {
          background: yellow;
          width: 100%; /* Play with this value */
          font-size: 0;
          text-align: center;   
        }
        wrap:before {
          content: "";
          width: 1px;
          height: 100%;
          display: inline-block;
          vertical-align: middle;
          margin-left: -1px;
        }
        .wrap video {
          max-width: 100%;
          max-height: 100%;
          display: inline-block;
          vertical-align: middle;
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
