import { useState } from 'react'

export const Navigation = (props) => {

  const [menuClass, setMenuClass] = useState('collapse navbar-collapse');


  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
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
          <a className='navbar-brand page-scroll' href='#header'>
            BestDrops
          </a>{' '}
        </div>

        <div
          className={menuClass}
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>

            <li>
              <a href='#howitworks' className='page-scroll'>
                How It Works
              </a>
            </li>
            <li>
              <a href='#tokenomics' className='page-scroll'>
                Tokenomics
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
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
