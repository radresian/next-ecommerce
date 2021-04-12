import { useState } from 'react'
import Image from "next/dist/client/image";

export const Navigation = (props) => {

  const [menuClass, setMenuClass] = useState('collapse navbar-collapse');

  let languageNextState;
  if(props.language === 'EN'){
    languageNextState = 'TR';
  }else {
    languageNextState = 'EN';
  }

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <button style={{display:'none'}} type='button' onClick={()=>{
        props.setLanguage(languageNextState)
      }}>
        {languageNextState}
      </button>

      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
            onClick={()=>{
              setMenuClass(prev =>{
               if(prev.indexOf('collapse ')<0){
                 return 'collapse navbar-collapse';
               } else {
                 return 'navbar-collapse';
               }
              })
            }}
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#header' style={{color:'white',marginTop:-25}}>
            <Image src="/img/tst18.png" width="250" height="70" />

          </a>
        </div>


        <div
          className={menuClass}
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                {props.data.about}
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                {props.data.services}
              </a>
            </li>

            <li>
              <a href='#howitworks' className='page-scroll'>
                {props.data.howitworks}
              </a>
            </li>
            <li>
              <a href='#tokenomics' className='page-scroll'>
                {props.data.tekonomics}
              </a>
            </li>
            <li>
              <a href='#roadmap' className='page-scroll'>
                {props.data.roadmap}
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                {props.data.team}
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                {props.data.contract}
              </a>
            </li>
            <li>
              <div>
              <a
                href='market'
                className='btn btn-custom btn-lg page-scroll'
              >
                Market
              </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  )
}
