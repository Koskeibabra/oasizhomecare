import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@styles/theme";
import { AppProps } from "next/app";
import {NextIntlProvider} from 'next-intl';
import { appWithTranslation } from 'next-i18next';
import 'flag-icon-css/css/flag-icon.min.css'
import Head from "next/head";


function CustomApp({ Component, pageProps }: AppProps) {
  return (
    
    <NextIntlProvider messages={pageProps.messages}>
    <>
    <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps}></Component>
      </ThemeProvider>
    </>
    </NextIntlProvider>
  );
}

export default appWithTranslation (CustomApp);
