import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  coinbaseWallet,
  localWallet,
  metamaskWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import { API_KEY, SMART_WALLET } from "../constants/addresses";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      supportedWallets={[
        smartWallet({
          factoryAddress: SMART_WALLET,
          thirdwebApiKey: API_KEY,
          gasless: true,
          personalWallets: [metamaskWallet(), coinbaseWallet(), localWallet()],
        }),
      ]}
    >
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
