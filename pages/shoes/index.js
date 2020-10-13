import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import nextCookies from 'next-cookies';

const h1 = css`
 display: flex;
  justify-content: center;
  margin-bottom: 390px;
  margin-top: 200px;
`;

export default function Shoes(props) {
  return (
    <div>
      <Layout numberofItems={props.numberofItems}>
        <Head>
          <title>Page not found!</title>
        </Head>

        <h1 css={h1}>Page not found!</h1>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {

  const allCookies = nextCookies(context);
  const numberofItems = allCookies.numberofItems || 0;
   
  return {
    props: {              
            numberofItems,
             },
  };
}