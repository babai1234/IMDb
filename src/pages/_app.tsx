import "../../styles/globals.css";
import Head from "next/head";
import Layout from "@components/Layout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  
 const router =  useRouter()
  return (
    <div>
      <Head>
        <title>IMDB</title>
      </Head>
      {
        router.pathname === "/auth" ? <Component {...pageProps}/>
        :  
        <Layout>
          <Component {...pageProps} />
        </Layout>
      }
    </div>
  );
}

export default MyApp;