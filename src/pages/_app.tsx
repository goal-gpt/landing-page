import "../styles/global.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import PlausibleProvider from "next-plausible";

const poppins = Poppins({
  display: "swap",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <PlausibleProvider
      domain="eras.fyi"
      enabled
      trackOutboundLinks
      taggedEvents
    >
      <QueryClientProvider client={queryClient}>
        <main className={`${poppins.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </QueryClientProvider>
    </PlausibleProvider>
  );
};

export default MyApp;
