import Head from 'next/head';
import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {

  return (
    <>
      <Head>
        <title>Jeydin21</title>
        <meta name="title" content="Jeydin21" />
        <meta name="description" content="My personal website made with ❤️" />
        <meta name="theme-color" content="#ff8a00" />

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

      <div className="bg-light-background dark:bg-dark-background2 bg-fixed bg-[linear-gradient(to_right,#17b5f930_1px,transparent_1px),linear-gradient(to_bottom,#17b5f930_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#86cdff15_1px,transparent_1px),linear-gradient(to_bottom,#86cdff15_1px,transparent_1px)] bg-[size:48px_48px] transition-all duration-300">
        {children}
      </div>
    </>
  );
}