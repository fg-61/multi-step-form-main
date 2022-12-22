import type { AppProps } from 'next/app'
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Multi Step Form</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          fontSizes: {
            xs: 10,
            sm: 12,
            md: 14,
            xl: 16,
          },
          fontFamily: 'Ubuntu !important',
          headings: {
            fontFamily: 'Ubuntu !important',
          }
        }}
      >
        <main>
          <Component {...pageProps} />
        </main>
      </MantineProvider>
    </>
  );
}
