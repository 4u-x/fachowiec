import React from "react";
import Head from 'next/head';
import App from "../components/app";
import Script from 'next/script';
import Main from "../components/Main"

export default function Home() {
  return (
    <>
      <Head>
        <title>Fachowiec</title>
      </Head>

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
      />
       <Main/>
      <App/>
    </>
  );
}
