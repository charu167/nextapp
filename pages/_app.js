import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { OffsetWrapper } from "../context/offsetContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <OffsetWrapper>
        <Component {...pageProps} />
      </OffsetWrapper>
    </>
  );
}

export default MyApp;
