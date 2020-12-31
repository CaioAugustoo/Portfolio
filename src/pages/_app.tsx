import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "styles/globals";
import theme from "../styles/theme/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="icon" href="/img/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,500&display=swap"
          rel="stylesheet"
        />
        <title>Caio Augusto | Desenvolvedor Front-end</title>
        <meta name="title" content="Caio Augusto | Desenvolvedor Front-end" />
        <meta
          name="description"
          content="Desenvolvedor Front-end & UI/UX Designer."
        />
        <meta
          name="google-site-verification"
          content="u6Vdueaj4zUT5QC9kQe57N0BopUpzrTN9HxiHTOZIBo"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://caiohtml.com/" />
        <meta
          property="og:title"
          content="Caio Augusto | Desenvolvedor Front-end"
        />
        <meta name="theme-color" content="#4285f4" />
        <meta name="background-color" content="#ffffff" />
        <meta
          property="og:description"
          content="Desenvolvedor Front-end & UI/UX Designer."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://caiohtml.com/" />
        <meta
          property="twitter:title"
          content="Caio Augusto | Desenvolvedor Front-end"
        />
        <meta
          property="twitter:description"
          content="Desenvolvedor Front-end & UI/UX Designer."
        />
        <meta
          name="keywords"
          content="front-end, desenvolvedor front-end, ui ux designer, designer gráfico,
            desenvolvedor front-end freelancer, desenvolvedor reactjs, desenvolvedor javascript,
            javascript, react, reactjs, typescript, strapi, api, dev, nextjs, cypress, tests, autoditada,
            caioaugusto, caioaugusto, caiohtml, caio augusto, freelancer, freela"
        />
        <meta name="robots" content="nofollow" />
        <meta name="revisit-after" content="1 day" />
        <meta property="”og:type”" content="”website”" />
        <meta property="”og:locale”" content="”pt_BR”" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
};
export default App;
