import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
      <main>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </main>
    </>
  );
}

export default MyApp;
