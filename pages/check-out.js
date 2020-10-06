import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const container = css`
  text-align: center;
  background-color: #d6e9e5;
  width: 400px;
`;

export default function CheckOut() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Check-out</title>
        </Head>

        <main css={container}>
          <h1>Pay now</h1>

          <form>
            <h2>Billing Address</h2>
            <label for="fname">
              <i class="fa fa-user"></i> Full Name
            </label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="John M. Doe"
            />
            <label for="email">
              <i class="fa fa-envelope"></i> Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="john@example.com"
            />
            <label for="adr">
              <i class="fa fa-address-card-o"></i> Address
            </label>
            <input
              type="text"
              id="adr"
              name="address"
              placeholder="542 W. 15th Street"
            />
            <label for="city">
              <i class="fa fa-institution"></i> City
            </label>
            <input type="text" id="city" name="city" placeholder="New York" />

            <p>
              <Link href={`/thank-you`}>
                <button>Confirm</button>
              </Link>
            </p>
          </form>
        </main>
      </Layout>
    </div>
  );
}
