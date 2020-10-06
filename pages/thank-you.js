import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const image = css`
  height: 400px;
  margin-top: 50px;
  margin-left: 400px;
`;

export default function ThankYou() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Thank you!</title>
        </Head>

        <main>
          <img css={image} src={'/images/thank-you.jpg'} alt="Thank you!"></img>
        </main>
      </Layout>
    </div>
  );
}
