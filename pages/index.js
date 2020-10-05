import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
/** @jsx jsx */
import { Globals, jsx, css } from '@emotion/core';

const intro = css`
  display: flex;
  justify-content: center;
  font-family: 'Quicksand', sans-serif;
  color: #1c2826;
  margin-bottom: 50px;
`;

const gallery = css`
  display: flex;
  justify-content: space-evenly;
`;

const galleryItem = css`
  width: 340px;
  height: 600px;
  border-radius: 8px;
`;

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Shoe-be-doo!</title>
        </Head>
        <main>
          <h1 css={intro}>Welcome!</h1>
          <p css={intro}>
            {' '}
            Find the shoes of your dreams at Shoe-be-Doo Shoe Outlet!
          </p>

          <div css={gallery}>
            <img
              css={galleryItem}
              src="/images/shopping-cart2.jpg"
              alt="shop door"
            ></img>
            <img
              css={galleryItem}
              src="/images/sample-shoes.jpg"
              alt="shop door"
            ></img>
            <img
              css={galleryItem}
              src="/images/smiley.jpg"
              alt="shop door"
            ></img>
          </div>
        </main>
      </Layout>
    </div>
  );
}
