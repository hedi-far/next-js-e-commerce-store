import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import nextCookies from 'next-cookies';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { mergeItems } from '../util/merge-items';
import TotalSum from '../components/TotalSum';

const white = css`
  background-color: #ffffff !important;
`;

const emptytitle = css`
  display: flex;
  justify-content: center;
  margin-bottom: 300px;
  margin-top: 200px;
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
  margin-bottom: 250px;
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

const totalAmount = css`
  font-weight: bold;
`;
const smallbutton = css`
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
  background-color: #ededed;
  border-radius: 9px;
  border: 2px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #777777;
  font-size: 8x;
  padding: 3px 6px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #ffffff;
`;

export default function CheckOut(props) {
  //set state for shoppingBag array
  const [shoppingBag, setShoppingBag] = useState(
    mergeItems(props.shoes, props.arrayofIds).filter(
      (item) => item.inBag === true,
    ),
  );

  //calculate price of each item based on amount
  const calculatedPrice = (shoePrice, shoeAmount) => {
    return shoePrice * shoeAmount;
  };
  //set state for total sum
  const [totalSum, setTotalSum] = useState(
    shoppingBag.reduce(function (prev, cur) {
      return prev + cur.price * cur.amount;
    }, 0),
  );

  //set state for numberofItems - displayed on shopping bag icon
  const [numberofItems, setNumberofItems] = useState(props.numberofItems);

  //set state of ids of selected shoes
  const [arrayofIds, setArrayofIds] = useState(props.arrayofIds);

  //set cookie with number of shopping bag items
  useEffect(() => {
    Cookies.set('numberofItems', numberofItems);
  }, [numberofItems]);

  //set cookie with IDs of shopping bag items
  useEffect(() => {
    Cookies.set('arrayofIds', arrayofIds);
  }, [arrayofIds]);

  //set totalSum on every change in shoppingBag
  useEffect(() => {
    setTotalSum(
      shoppingBag.reduce(function (prev, cur) {
        return prev + cur.price * cur.amount;
      }, 0),
    );
  }, [shoppingBag]);

  //delete function - gives back a new arrayofIds without respective id
  const handleDelete = (id) => {
    for (let i = 0; i < arrayofIds.length; i++) {
      if (arrayofIds[i] === id) {
        arrayofIds.splice(i, 1);
        i--;
      }
    }

    const filteredArrayofIds = arrayofIds;

    setArrayofIds(filteredArrayofIds);

    setNumberofItems(filteredArrayofIds.length);

    Cookies.set('arrayofIds', arrayofIds);
  };

  //when plus button is clicked
  const handleIncrease = (id) => {
    //add id of item to shopping bag
    const newArrayofIds = arrayofIds.concat(id);

    setArrayofIds(newArrayofIds);

    //set number of Items in the shopping bag
    setNumberofItems(newArrayofIds.length);

    Cookies.set('arrayofIds', arrayofIds);
  };

  //when minus button is clicked
  const handleDecrease = (id, amount) => {
    //find first occurence of id in array of ids
    const indexOfId = arrayofIds.indexOf(id);

    const newArrayofIds = arrayofIds.splice(indexOfId, 1);

    const decreasedArrayofIds = arrayofIds;

    setArrayofIds(decreasedArrayofIds);

    setNumberofItems(decreasedArrayofIds.length);

    Cookies.set('arrayofIds', arrayofIds);
  };

  if (props.numberofItems > 0) {
    return (
      <div>
        <Layout numberofItems={props.numberofItems}>
          <Head>
            <title>Shopping Bag</title>
          </Head>
          <main>
            <div css={container}>
              <table>
                <tbody>
                  <tr>
                    <td css={white} colSpan="6">
                      <h1 css={title}>Your Shopping Bag</h1>
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <th>Quantity</th>
                    <th>Item</th>
                    <th>Size</th>
                    <th>Prize</th>
                    <th>Options</th>
                  </tr>
                  {shoppingBag.map((shoe) => (
                    <tr key={shoe.id}>
                      <td>
                        <img
                          css={tinyImg}
                          src={`${shoe.image}`}
                          alt="shoe"
                        ></img>
                      </td>
                      <td>
                        <button
                          css={smallbutton}
                          onClick={(item) => handleIncrease(shoe.id)}
                        >
                          {' '}
                          +
                        </button>{' '}
                        {shoe.amount}{' '}
                        <button
                          css={smallbutton}
                          onClick={(item) => handleDecrease(shoe.id)}
                        >
                          {' '}
                          -{' '}
                        </button>
                      </td>
                      <td>{shoe.name}</td>
                      <td>{shoe.size}</td>
                      <td>{calculatedPrice(shoe.price, shoe.amount)}€</td>
                      <td>
                        <button onClick={(item) => handleDelete(shoe.id)}>
                          Delete All
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr css={totalAmount}>
                    <td>Total:</td>
                    <td>{props.numberofItems}</td>
                    <td></td>
                    <td></td>
                    <td>
                      <TotalSum totalSum={totalSum} />
                    </td>
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
  } else {
    return (
      <div>
        <Layout numberofItems={props.numberofItems}>
          <Head>
            <title>Shopping Bag</title>
          </Head>
          <main>
            <div css={container}>
              <h1 css={emptytitle}>Your Shopping Bag is empty!</h1>
            </div>
          </main>
        </Layout>
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  //comes from next-cookie
  const allCookies = nextCookies(context);

  const numberofItems = allCookies.numberofItems || 0;
  const arrayofIds = allCookies.arrayofIds || [];

  // dynamic import, imports all shoes from databse
  const { getShoes } = await import('../util/database');
  const shoes = await getShoes();

  return {
    props: {
      arrayofIds,
      numberofItems,
      shoes,
    },
  };
}
