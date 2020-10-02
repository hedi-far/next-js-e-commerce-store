import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function ThankYou() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Thank you!</title>
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>

        <main>
          <h1>Thank you!</h1>
        </main>
      </Layout>
    </div>
  );
}
