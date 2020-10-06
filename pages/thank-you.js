import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const image = css`
  height: 350px;
  margin-top: 100px;
  margin-left: 200px;
  margin-right: 70px;
  border-radius: 20%;
`;

const container = css`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-bottom: 200px;
`;

export default function ThankYou() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Thank you!</title>
        </Head>

        <main css={container}>
          <img css={image} src={'/images/thank-you.jpg'} alt="Thank you!"></img>
          <p>
            Thank you for your purchase. <br /> We hope you'll enjoy our
            products. <br />
            Come back soon!
          </p>
        </main>
      </Layout>
    </div>
  );
}
