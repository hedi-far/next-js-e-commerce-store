import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
/** @jsx jsx */
import { jsx } from '@emotion/core';


export default function Layout(props) {

  console.log (props.numberofItems)
 
  return (
    <>
      <Head>
        <html lang="eng" />
      </Head>
      <Header numberofItems = {props.numberofItems} />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
