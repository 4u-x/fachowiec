import Head from 'next/head';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Script from 'next/script';
import styles from "../styles/Home.module.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';



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

      <Header />
      <h1 className={styles.fach}>Dobry Fachowiec</h1>

      <footer className={styles.footer}>
        <Footer />
      </footer>
      </>
    );
}

