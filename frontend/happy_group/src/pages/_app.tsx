import React, { FC } from "react";
import { AppProps } from "next/app";
// import "../global.css";
import { store } from "@/app/state/store/store";
import { Provider } from "react-redux";

import Router from "next/router";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
// import { useRouter } from 'next/dist/client/router';
// import * as gtag from '../lib/gtag';

//Binding events.

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // const router = useRouter();
  // useEffect(() => {
  //     const handleRouteChange = (url) => {
  //         gtag.pageview(url);
  //     };
  //     router.events.on('routeChangeComplete', handleRouteChange);
  //     return () => {
  //         router.events.off('routeChangeComplete', handleRouteChange);
  //     };
  // }, [router.events]);

  return (
    <Provider store={store}>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
    </Provider>
  );
};
export default App;
