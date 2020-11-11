import Head from 'next/head';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Cookies from 'js-cookie';
import Layout from '../components/Layout';

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
  //eslint-disable-next-line no-unused-vars
  const numberOfItems = Cookies.remove('numberOfItems', {
    path: './thank-you',
  });
  //eslint-disable-next-line no-unused-vars
  const arrayOfIds = Cookies.remove('arrayOfIds', { path: './thank-you' });

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
