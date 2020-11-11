import Head from 'next/head';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import nextCookies from 'next-cookies';
import Layout from '../components/Layout';

const intro = css`
  display: flex;
  justify-content: center;

  font-family: 'Quicksand', sans-serif;
  margin-bottom: 50px;
`;

const gallery = css`
  display: flex;
  justify-content: space-evenly;
`;

const galleryItem = css`
  width: 340px;
  height: 500px;
  border-radius: 8px;
`;

export default function Home(props) {
  return (
    <div>
      <Layout numberOfItems={props.numberOfItems}>
        <Head>
          <title>Welcome!</title>
        </Head>
        <main>
          <h1 css={intro}>Welcome to The Random Shoe Outlet!</h1>
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

export async function getServerSideProps(context) {
  const allCookies = nextCookies(context);
  const numberOfItems = allCookies.numberOfItems || '0';

  return {
    props: {
      numberOfItems,
    },
  };
}
