import { useCallback, useState, useEffect } from 'react';

import Link from 'next/link';
import {
  FaUser,
  FaSignOutAlt,
  FaBars,
} from 'react-icons/fa';

import Logo from '../logo';


export default function HeaderDesktop({ viewer, connectWallet }) {


  return (
    <>
      <div className="header header-top">
        <Logo />


        <div className="nav-buttons">
          <a
            href='/'
          >
            About
          </a>
          <button id='header-button'
            className='btn-custom'
            onClick={connectWallet}
          >
            {viewer?.wallet ? viewer.wallet.substring(0,6) + '...' + viewer.wallet.substring(viewer.wallet.length-3) : 'Connect Wallet'}
          </button>

          {false && (
            <Link href="/user/login">
              <a className="nav-buttons-signin">
                <FaUser color="#808080" />
                <p>Sign In</p>
              </a>
            </Link>
          )}
          {viewer && (
            <>
            <Link href="/create">
              <button id='header-button-create'
                 className='btn-custom'
              >
                Create
              </button>
            </Link>
              <Link href="/user/profile">
                <a className="nav-buttons-profile">
                  <FaUser color="#808080" />
                  <p>{viewer.name}</p>
                </a>
              </Link>
              <Link href="/user/signout">
                <a className="nav-buttons-signout">
                  <FaSignOutAlt />
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
      {false &&
        <div className="header header-bottom">
          <div className="all-categories-box">
            <FaBars color="#d8d8d8"/>
            <select name="categories" id="categories">
              <option value="All Categories" selected>
                All Categories
              </option>
              <option value="#">Desktop</option>
              <option value="#">Smartphone</option>
              <option value="#">Watches</option>
              <option value="#">Games</option>
              <option value="#">Laptop</option>
              <option value="#">Keyboards</option>
              <option value="#">TV & Video</option>
              <option value="#">Accessories</option>
            </select>
          </div>

          <nav className="main-nav">
            <Link href="#">
              <a>Super Deals</a>
            </Link>
            <Link href="#">
              <a>Featured Brands</a>
            </Link>
            <Link href="#">
              <a>Collections</a>
            </Link>
            <Link href="#">
              <a>Bestselling</a>
            </Link>
          </nav>

          <div className="settings">
            <div className="menu-dropdown">
              <p>Help</p>
            </div>
            <div className="menu-dropdown">
              <p>USD</p>
            </div>
            <div className="menu-dropdown">
              <p>Language</p>
            </div>
          </div>
        </div>
      }
      <style jsx>{`
        /* Header Top */
        .header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 0 11vw;
        }
        #header-button {
          padding:10px;
          margin-left: 20px;
        }
         #header-button-create {
          padding:10px;
          margin-left: 20px;
          background: #021e66;
        }
        .nav-buttons {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .btn-custom {
          font-family: 'Raleway', sans-serif;
          text-transform: uppercase;
          color: #fff !important;
          background-color: #694bed;
          background-image: linear-gradient(to right, #694bed 0%, #3e9ffb 100%);
          padding: 14px 34px;
          letter-spacing: 1px;
          margin: 0;
          font-size: 15px;
          font-weight: 500;
          border-radius: 25px;
          transition: all 0.5s linear;
          border: 0;
        }
        .nav-buttons a {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-left: 32px;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          text-decoration: none;
          color: #808080;
        }
        .nav-buttons .items-total {
          font-size: 12px;
          align-self: flex-end;
        }
        .nav-buttons .nav-buttons-signout {
          margin-left: 12px;
        }
        .nav-buttons a:hover {
          text-decoration: underline;
        }
        .nav-buttons a p {
          margin-left: 8px;
        }
        /* Header Bottom */
        .header-bottom {
          padding: 0px 10vw;
          border-top: 2px solid #f5f5f5;
        }
        .header-bottom .all-categories-box {
          height: 100%;
          display: flex;
          align-items: center;
          /* Border */
          border-right: 2px solid #f5f5f5;
          padding-top: 20px;
          padding-bottom: 20px;
          padding-right: 48px;
        }
        .header-bottom .all-categories-box select {
          height: 100%;
          padding-left: 15px;
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 60px;
          color: #808080;
          border: none;
          background: none;
        }
        .header-bottom .all-categories-box select:focus {
          outline: none;
        }
        .header-bottom .main-nav {
          display: flex;
          align-items: center;
        }
        .header-bottom .main-nav a {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          color: #666666;
          text-decoration: none;
          margin-left: 16px;
          margin-right: 16px;
        }
        .header-bottom .main-nav a:hover {
          text-decoration: underline;
        }
        .header-bottom .settings {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .header-bottom .settings .menu-dropdown {
          /* Border */
          border-left: 2px solid #f5f5f5;
          padding: 20px 24px;
        }
        .header-bottom .settings .menu-dropdown p {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          color: #b3b3b3;
        }
      `}</style>
    </>
  );
}
