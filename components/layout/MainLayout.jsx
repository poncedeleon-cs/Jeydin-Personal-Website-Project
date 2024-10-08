import Head from 'next/head';

function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>Jeydin21</title>
        <meta name="title" content="Jeydin21" />
        <meta name="description" content="My personal landing page made with ❤️" />
        <meta name="theme-color" content="#f2cdcd" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="j21.dev" />
        <meta property="og:title" content="Jeydin21" />
        <meta property="og:description" content="My personal landing page made with ❤️" />
        <meta property="og:image" content="/favicon.png" />

        <meta property="twitter:url" content="j21.dev" />
        <meta property="twitter:title" content="Jeydin21" />
        <meta property="twitter:description" content="My personal landing page made with ❤️" />
        <meta property="twitter:image" content="/favicon.png" />

        <link rel="icon" href="/favicon.ico" type="image/png" />

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-light-background dark:bg-dark-background ">
        {children}
      </div>
    </>
  );
}

export default MainLayout;