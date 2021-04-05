import React from 'react';
import App from './App';
import Head from 'next/head';

const Page = props => {

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"/>
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
        <title>BestDrop</title>
        <meta name="description" content=""/>
        <meta name="author" content="@Issaafalkattan"/>
      </Head>
    <App></App>
    </>
  )
};

export default Page;
