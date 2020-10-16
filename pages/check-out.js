import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import nextCookies from 'next-cookies';
import { useState, useEffect } from 'react';
import { Sum } from '../components/sum';

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

const form = css`
  margin-right: 20px;
  width: 400px;
`;

const title = css`
  margin-left: 445px;
`;

const button = css`
  display: flex;
  align-items: flex-end;
`;

export default function CheckOut(props) {
  // //set state for shoppingBag array
  // const [shoppingBag, setShoppingBag] = useState(props.shoppingBag);

  // const [totalSum, setTotalSum] = useState ();

  // useEffect(() =>{
  //   const newTotalSum = props.shoppingBag.reduce(function(prev, cur) {
  //     return prev + cur.price;
  //   }, 0);

  //   setTotalSum(newTotalSum) }, [props.shoppingBag]);

  return (
    <div>
      <Layout numberofItems={props.numberofItems}>
        <Head>
          <title>Check-out</title>
        </Head>
        <h1 css={title}>Pay now</h1>
        <h1 css={title}>Total amount: {Sum} € </h1>
        <main css={container}>
          <form css={form}>
            <h3> Billing Address</h3>

            <label for="fname">Full Name</label>
            <br />
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="John M. Doe"
            />
            <br />
            <label for="email">Email</label>
            <br />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="john@example.com"
            />
            <br />
            <label for="adr">Address</label>
            <br />
            <input
              type="text"
              id="adr"
              name="address"
              placeholder="542 W. 15th Street"
            />
            <br />
            <label for="zip">Zip code</label>
            <br />
            <input type="text" id="zip" name="zip" placeholder="10001" />
            <br />
            <label for="city">City</label>
            <br />
            <input type="text" id="city" name="city" placeholder="New York" />
            <br />
          </form>
          <form css={form}>
            <h3>Payment</h3>
            <label for="cname">Name on Card</label>
            <br />
            <input
              type="text"
              id="cname"
              name="cardname"
              placeholder="John More Doe"
            />
            <br />
            <label for="ccnum">Credit card number</label>
            <br />
            <input
              type="text"
              id="ccnum"
              name="cardnumber"
              placeholder="1111-2222-3333-4444"
            />
            <br />
            <label for="expmonth">Exp Month</label>
            <br />
            <input
              type="text"
              id="expmonth"
              name="expmonth"
              placeholder="September"
            />
            <br />

            <label for="expyear">Exp Year</label>
            <br />
            <input type="text" id="expyear" name="expyear" placeholder="2018" />
            <br />

            <label for="cvv">CVV</label>
            <br />
            <input type="text" id="cvv" name="cvv" placeholder="352" />
            <br />
            <label>
              <input type="checkbox" checked="checked" name="sameadr" />
              Shipping address same as billing address.
              <br />
            </label>
          </form>
          <p css={button}>
            <Link href={`/thank-you`}>
              <button>Confirm</button>
            </Link>
          </p>
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
