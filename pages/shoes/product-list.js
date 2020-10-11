import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const intro = css`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const product = css`
  height: 200px;
  margin: 10px;
  border-radius: 20%;
  cursor: pointer;

  &:hover {
     {
      -moz-box-shadow: 0 0 20px #666666;
      -webkit-box-shadow: 0 0 20px #666666;
      box-shadow: 0 0 20px #666666;
    }
  }
`;

const gallery = css`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  flex-wrap: wrap;
`;

export default function ShoppingCart(props) {
  return (
    <div>
      <Layout>
        <Head>
          <title>All products</title>
        </Head>

        <h1 css={intro}>Our shoes</h1>

        <ul css={gallery}>
          {props.shoes.map((shoe) => {
            return (
              <li key={shoe.id}>
                <Link href={`/shoes/${shoe.id}`}>
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

export async function getServerSideProps(context) {

  // dynamic import, import shoes from databse
const { getShoes } = await import ('../../util/database')
const shoes = await getShoes();

return {
  props: {  
          shoes,
          },
};
}
