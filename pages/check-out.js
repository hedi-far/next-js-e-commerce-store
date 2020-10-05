import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export default function CheckOut() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Check-out</title>
        </Head>

        <main>
          <h1>Check-out</h1>

          <Link href="/thank-you">
            <a>Submit(->thank you)</a>
          </Link>
        </main>
      </Layout>
    </div>
  );
}
