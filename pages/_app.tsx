import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import ReactGA from "react-ga4";
//import { Helmet } from "react-helmet";
//import TagManager from 'react-gtm-module';
import { GTMProvider } from '@elgorditosalsero/react-gtm-hook'

const MEASUREMENT_ID = "G-3KWCED0960";
ReactGA.initialize(MEASUREMENT_ID);
const gtmParams = { id: 'G-3KWCED0960' }
//const tagManagerArgs = {
//  gtmId: 'G-3KWCED0960'
//}

//TagManager.initialize(tagManagerArgs)

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  
  return (
  
    <GTMProvider state={gtmParams}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
        
        <Analytics />
      </SessionProvider>
    </GTMProvider>
  );
}

export default MyApp;
