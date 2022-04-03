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
        <div className="header-text-container">
          <h1>Türkiye'de Bir İlk, Türk Sanatçılarının NFT lerini Türk Lirası ile Satın Alın</h1>
          <h2>eNeF-Turk ile bir crypto cüzdanınız olmasa bile sergilenen sanat eserlerinin NFT haklarını kredi kartınız ile hemen satın alabilirsiniz.</h2>
          <a
             href='#content'
              id='header-text-button'
                  className='header-text-button'
          >
            Hemen NFT lere Göz At
          </a>
        </div>
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
        h1 {
          color: white;
          font-size: 38px;
          font-weight: 800;
          margin-bottom: 10px;
        }
        h2 {
          color: white;
          font-size: 25px;
          font-weight: 300;
        }
       .header-text-button {
          font-family: 'Raleway', sans-serif;
          text-transform: uppercase;
          color: #fff !important;
          background-color: #694bed;
          background-image: linear-gradient(to right, #694bed 0%, #3e9ffb 100%);
          padding: 14px 34px;
          letter-spacing: 1px;
          margin-top: 20px;
          font-size: 15px;
          font-weight: 500;
          border-radius: 25px;
          transition: all 0.5s linear;
          border: 0;
          text-decoration: none;
          display: inline-block;
        }
        .header-text-container {
          position: absolute;
          top: 200px;
          left: 100px;
          z-index: 2;
        }
        .wrap {
          background: yellow;
          width: 100%;
          height: 23vw;
          font-size: 0;
          text-align: center;
          z-index: 1;
        }
        .wrap video {
          max-width: 155%;
          max-height: 155%;
          display: inline-block;
          vertical-align: middle;
        }
        #mobile {
          display: none;
          z-index: 0;
        }
        @media (max-width: 1256px) {
          .wrap {
            height: 100%;
          }
          .wrap video {
            max-width: 100%;
            max-height: 100%;
          }
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
