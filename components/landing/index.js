import React from 'react';
import App from './App';
import Head from 'next/head';

const Page = props => {

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="shortcut icon" href="img/favicon.png"/>
        <link rel="icon" href="img/logo1.png" />
        <link rel="apple-touch-icon" href="img/apple-touch-icon.png"/>
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="img/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="img/apple-touch-icon-114x114.png"
        />

        <link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
        <link
          rel="stylesheet"
          type="text/css"
          href="fonts/font-awesome/css/font-awesome.css"
        />
        <link rel="stylesheet" type="text/css" href="css/style.css"/>
        <link
          rel="stylesheet"
          type="text/css"
          href="css/nivo-lightbox/nivo-lightbox.css"
        />
        <link rel="stylesheet" type="text/css" href="css/nivo-lightbox/default.css"/>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@800&display=swap"
          rel="stylesheet" />
        <title>eNeF-Turk | Yetkili NFT Pazar Yeri</title>
        <meta name="description" content=""/>
        <meta name="author" content="@"/>
      </Head>
    <App language={props.language}></App>
    </>
  )
};

export default Page;
