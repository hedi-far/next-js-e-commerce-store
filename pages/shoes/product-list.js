import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { shoes } from '../../database';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const intro = css`
  display: flex;
  justify-content: center;
  font-family: 'Quicksand', sans-serif;
  color: #1c2826;
  margin-bottom: 50px;
`;

const product = css`
  height: 200px;
  border-color: #9a0606;
  border-style: inset;
  border-width: thick;
  margin: 10px;
  border-radius: 20%;
  cursor: pointer;
`;

const gallery = css`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  flex-wrap: wrap;
`;

export default function ShoppingCart() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Our shoes</title>
        </Head>

        <h1 css={intro}>Our shoes</h1>

        <ul css={gallery}>
          {shoes.map((shoe) => {
            return (
              <li key={shoe.id}>
                <Link href={`/shoes/${shoe.id}`}>
                  {/* <a>{shoe.name}</a> */}
                  <img css={product} src={`${shoe.image}`} alt="shoe"></img>
                </Link>
              </li>
            );
          })}
        </ul>
      </Layout>
    </div>
  );
}
