import "../../styles/globals.css";
import Head from "next/head";
import Layout from "@components/Layout";
import { useRouter } from "next/router";
import { AuthProvider } from "src/Context/auth.context";

function MyApp({ Component, pageProps }) {
  
 const router =  useRouter()
  return (
    <div>
      <Head>
        <title>IMDB</title>
      </Head>
      {
        router.pathname === "/auth"
        ?
        <AuthProvider>
          <Component {...pageProps}/>
        </AuthProvider>
        :
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider> 
      }
    </div>
  );
}

export default MyApp;