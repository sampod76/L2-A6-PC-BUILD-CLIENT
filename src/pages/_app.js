
import RootLayout from "@/components/layout/RootLayout";
import store from "@/redux/store";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"
import Head from "next/head";
import { Provider } from "react-redux";

export default function App({ Component, pageProps:{session,...pageProps} }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Head>
        <title>PC Built bd</title>
      </Head>
      <Provider store={store}>
        <SessionProvider session={session}>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </SessionProvider>
      </Provider>
    </>
  );
}

