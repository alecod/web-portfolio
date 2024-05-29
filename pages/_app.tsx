import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';



const MyApp = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://cdn.matomo.cloud/webportfolioonerustvercelapp.matomo.cloud/container_BW6w2jxn.js'; s.parentNode.insertBefore(g,s);
   }, [])

  return (

  <Component {...pageProps} />

)
}

export default MyApp