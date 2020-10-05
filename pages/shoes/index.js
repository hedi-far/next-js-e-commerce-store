import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core';

export default function Shoes() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Our shoes</title>
        </Head>

        <h1>Our shoes</h1>
      </Layout>
    </div>
  );
}
