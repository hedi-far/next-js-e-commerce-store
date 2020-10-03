import Head from 'next/head';
import Header from './Header';

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/icons8-damenschuh-in-seitenansicht-100.png" />
      </Head>
      <Header />
      <main>{props.children}</main>
      <footer>footer here</footer>;
    </>
  );
}
