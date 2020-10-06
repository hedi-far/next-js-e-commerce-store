import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { shoes } from '../database';

const white = css`
  background-color: #ffffff !important;
`;

const title = css`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const container = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const img = css`
  width: 340px;
  height: 500px;
  border-radius: 8px;
  margin-left: 30px;
  margin-top: 80px;
`;

const tinyImg = css`
  height: 60px;
`;

export default function CheckOut() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Shopping Bag</title>
        </Head>
        <main>
          <div css={container}>
            {/* <img
              css={img}
              src="/images/shopping-bag.jpg"
              alt="shopping bag"
            ></img>{' '} */}
            <table>
              <tbody>
                <tr>
                  <td css={white} colspan="5">
                    <h1 css={title}>Your Shopping Bag</h1>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <th>Item</th>
                  <th>Size</th>
                  <th>Prize</th>
                  <th></th>
                </tr>
                {shoes.map((shoe) => (
                  <tr key={shoe.id}>
                    <td>
                      <img css={tinyImg} src={`${shoe.image}`} alt="shoe"></img>
                    </td>
                    <td>{shoe.name}</td>
                    <td>{shoe.size}</td>
                    <td>{shoe.price} €</td>
                    <td></td>
                  </tr>
                ))}
                <tr>
                  <td>Total:</td>
                  <td></td>
                  <td></td>
                  <td>1000 €</td>
                  <td>
                    <Link href={`/check-out`}>
                      <button>Pay now</button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </Layout>
    </div>
  );
}
