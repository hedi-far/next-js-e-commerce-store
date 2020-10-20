import Head from 'next/head';
// import Link from 'next/link';
import Layout from '../components/Layout';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import nextCookies from 'next-cookies';
// import { useState, useEffect } from 'react';
// import { Sum } from '../components/sum';
import TotalSum from '../components/TotalSum';

const container = css`
  text-align: left;
  width: 600px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-left: 450px;
  line-height: 30px;
  margin-bottom: 120px;
`;

const column = css`
  margin-right: 20px;
  width: 400px;
`;

const title = css`
  margin-left: 445px;
`;

const button = css`
  height: 40px;
  margin-top: 320px;
`;

const input = css`
  &:invalid + span:after {
    content: '✖';
    padding-left: 5px;
  }
  &:valid + span:after {
    content: '✓';
    padding-left: 5px;
  }
`;

export default function CheckOut(props) {
  return (
    <div>
      <Layout numberofItems={props.numberofItems}>
        <Head>
          <title>Check-out</title>
        </Head>
        <h1 css={title}>Pay now</h1>
        <TotalSum />
        <main>
          <form css={container} action="/thank-you">
            <div css={column}>
              <h3> Address (required)</h3>
              <label htmlFor="fname">Full Name</label>
              <br />
              <input
                css={input}
                type="text"
                id="fname"
                name="fullname"
                placeholder="John M. Doe"
                required
              />
              <span class="validity"></span>
              <br />
              <label htmlFor="email">Email</label>
              <br />
              <input
                css={input}
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                required
              />
              <span class="validity"></span>
              <br />
              <label htmlFor="adr">Address</label>
              <br />
              <input
                css={input}
                type="text"
                id="adr"
                name="address"
                placeholder="542 W. 15th Street"
                required
              />
              <span class="validity"></span>
              <br />
              <label htmlFor="zip">Zip code</label>
              <br />
              <input
                css={input}
                type=""
                id="zip"
                name="zip"
                placeholder="10001"
                required
              />
              <span class="validity"></span>
              <br />
              <label htmlFor="city">City</label>
              <br />
              <input
                css={input}
                type="text"
                id="city"
                name="city"
                placeholder="New York"
                required
              />
              <span class="validity"></span>
              <br />
            </div>
            <div css={column}>
              <h3>Payment (required)</h3>
              <label htmlFor="cname">Name on Card</label>
              <br />
              <input
                css={input}
                type="text"
                id="cname"
                name="cardname"
                placeholder="John More Doe"
                required
              />
              <span class="validity"></span>
              <br />
              <label htmlFor="ccnum">Credit card number</label>
              <br />
              <input
                css={input}
                type="text"
                id="ccnum"
                name="cardnumber"
                placeholder="1111-2222-3333-4444"
                required
              />
              <span class="validity"></span>
              <br />
              <label htmlFor="expmonth">Exp Month</label>
              <br />
              <input
                css={input}
                type="text"
                id="expmonth"
                name="expmonth"
                placeholder="September"
                required
              />
              <span class="validity"></span>
              <br />
              <label htmlFor="expyear">Exp Year</label>
              <br />
              <input
                css={input}
                type="number"
                id="expyear"
                name="expyear"
                placeholder="2020"
                min="2020"
              />
              <span class="validity"></span>
              <br />
              <span class="validity"></span>
              <label htmlFor="cvv">CVV</label>
              <br />
              <input
                css={input}
                type="text"
                id="cvv"
                name="cvv"
                placeholder="352"
                required
                minlength="3"
                maxLength="3"
              />
              <span class="validity"></span>
              <br />
            </div>
            <button css={button}>Confirm</button>
          </form>
        </main>
      </Layout>
    </div>
  );
}

export function getServerSideProps(context) {
  //comes from next-cookie
  const allCookies = nextCookies(context);
  // const totalSum = allCookies.totalSum || 0;
  const shoppingBag = allCookies.shoppingBag || [];

  // let totalString = allCookies.total
  // totalString = totalString.map(function (x) {
  //   return parseInt(x, 10);
  // });
  // const totalArray = totalString.reduce(function (accumulator, currentValue) {
  //   return accumulator + currentValue;
  // }, 0);

  // const total = totalArray || [];
  const numberofItems = allCookies.numberofItems || 0;

  return {
    props: {
      shoppingBag,
      // totalSum,
      numberofItems,
    },
  };
}
