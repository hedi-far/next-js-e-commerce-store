import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function Layout(props) {
  return (
    <>
      <Head>
        <html lang="eng" />
        <link rel="icon" href="/icons8-damenschuh-in-seitenansicht-100.png" />
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
