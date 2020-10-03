import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { shoes } from '../../database';

export default function ShoppingCart() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Our shoes</title>
        </Head>

        <h1>Our shoes</h1>

        <ul>
          {shoes.map((shoe) => {
            return (
              <li key={shoe.id}>
                <Link href={`/shoes/${shoe.id}`}>
                  <a>{shoe.name}</a>
                </Link>
              </li>
            );
          })}
          ;
        </ul>
      </Layout>
    </div>
  );
}
