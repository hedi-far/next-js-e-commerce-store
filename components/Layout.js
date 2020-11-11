import Head from 'next/head';
import Header from './Header.tsx';
import Footer from './Footer.tsx';

export default function Layout(props) {
  return (
    <>
      <Head>
        <html lang="eng" />
      </Head>
      <Header numberOfItems={props.numberOfItems} />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
