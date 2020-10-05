import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
/** @jsx jsx */
import { Globals, jsx, css } from '@emotion/core';

export default function ShoppingCart() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Shopping cart</title>
        </Head>

        <main>
          <h1>Shopping Cart</h1>

          <Link href="/check-out">
            <a>Check-out</a>
          </Link>
        </main>
      </Layout>
    </div>
  );
}
