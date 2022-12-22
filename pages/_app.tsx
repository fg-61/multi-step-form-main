import type { AppProps } from 'next/app'
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Ubuntu } from "@next/font/google"

const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  style: 'normal',
  subsets: ['latin'],
})


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
          fontFamily: ubuntu.style.fontFamily,
          fontWeight: ubuntu.style.fontWeight,
          colorScheme: "light"
        } as any}
      >
        <main>
          <Component {...pageProps} />
        </main>
      </MantineProvider>
    </>
  );
}
