import { createContext, useContext, useState } from 'react'
import Web3 from 'web3';

const Web3Context = createContext(null);

export function Web3Provider(props) {

  const [web3] = useState(() => {
    if(process.browser) {
      if (window.ethereum) {
        return new Web3(window.ethereum);
      }
    }
    return null;
  });


  return <Web3Context.Provider value={web3} {...props}  />
}


export default function useWeb3(){
  const context = useContext(Web3Context);
  return context;
}
