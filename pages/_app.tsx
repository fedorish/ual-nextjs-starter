import { WAX_BASE_HOST, WAX_CHAIN_ID } from "@/util/constants";
import { Wax } from "@eosdacio/ual-wax";
import type { AppProps } from "next/app";
import { Anchor } from "ual-anchor";
//@ts-ignore - Smaller size lib than the official
import { UALProvider } from "@cmichel/ual-reactjs-renderer";
import { Chain } from "universal-authenticator-library";
import "regenerator-runtime";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const appName = "Application Name";
  const chain: Chain = {
    chainId: WAX_CHAIN_ID,
    rpcEndpoints: [
      {
        protocol: "https",
        host: WAX_BASE_HOST,
        port: 443,
      },
    ],
  };
  const getAuthenticators = (WAX_CHAIN_ID: string) => {
    const anchor = new Anchor([chain], {
      appName,
    });
    const wax = new Wax([chain], {});

    return [anchor, wax];
  };

  const authenticators = getAuthenticators(WAX_CHAIN_ID);

  return (
    <UALProvider
      appName={appName}
      authenticators={authenticators}
      chains={[chain]}
      key={chain.chainId}
    >
      <Component {...pageProps} />
    </UALProvider>
  );
}

export default MyApp;
