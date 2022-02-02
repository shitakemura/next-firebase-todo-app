import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../hooks/useAuthContext";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <VStack>
      <Head>
        <title>Todo App</title>
      </Head>
      <AuthProvider>
        <ChakraProvider>
          <Header />
          <Component {...pageProps} />
        </ChakraProvider>
      </AuthProvider>
    </VStack>
  );
}

export default MyApp;
