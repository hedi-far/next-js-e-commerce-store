import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import nextCookies from 'next-cookies';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { finalBag } from '../util/final-bag';
import { total } from '../util/total-sum';
import { GetServerSidePropsContext } from 'next';
import { Reload } from '../util/reload';

const white = css`
  background-color: #ffffff !important;
`;

const emptytitle = css`
  display: flex;
  justify-content: center;
  margin-bottom: 300px;
  margin-top: 210px;
  margin-left: 50px;
`;

const backhome = css`
  margin-left: 10px;
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

const tinyImg = css`
  height: 60px;
  border-radius: 20%;
  cursor: pointer;
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

const shopmore = css`
  margin-left: 220px;
`;

//Type definitions
type SingleShoe = {
  id: number;
  image: string;
  name: string;
  description: string;
  size: number;
  price: number;
  amount: number;
};

type Props = {
  arrayofIds: number[];
  numberofItems: string;
  shoe: SingleShoe[];
  shoes: {};
};

export default function CheckOut(props: Props) {
  //set state for shoppingBag array
  //eslint-disable-next-line no-unused-vars
  const [shoppingBag, setShoppingBag] = useState(
    finalBag(props.shoes, props.arrayofIds),
  );

  //calculate price of each item based on amount to display in shopping bag
  const calculatedPrice = (shoePrice: number, shoeAmount: number) => {
    return shoePrice * shoeAmount;
  };
  //set state for total sum
  const [totalSum, setTotalSum] = useState(total(shoppingBag));

  //set state for numberofItems - displayed on shopping bag icon
  const [numberofItems, setNumberofItems] = useState(props.numberofItems);

  //set state of ids of selected shoes
  const [arrayofIds, setArrayofIds] = useState(props.arrayofIds);

  //set cookie with number of shopping bag items
  useEffect(() => {
    Cookies.set('numberofItems', numberofItems);
  }, [numberofItems, props.shoes]);

  //set cookie with IDs of shopping bag items
  useEffect(() => {
    Cookies.set('arrayofIds', arrayofIds);
    setShoppingBag(finalBag(props.shoes, arrayofIds));
  }, [arrayofIds, props.shoes]);

  //set totalSum on every change in shoppingBag
  useEffect(() => {
    setTotalSum(total(shoppingBag));
  }, [shoppingBag]);

  //delete function - mutates original array
  const handleDelete = (id: number) => {
    const filteredArrayofIds = arrayofIds.filter(
      (idtoRemove) => idtoRemove !== id,
    );

    //set status of arrayofIds to mutated array
    setArrayofIds(filteredArrayofIds);

    //update number displayed on shopping card
    setNumberofItems(String(filteredArrayofIds.length));
  };

  //when plus button is clicked
  const handleIncrease = (id: number) => {
    //add id of item to shopping bag
    const newArrayofIds = arrayofIds.concat(id);

    //set status of arrayofIds to mutated array
    setArrayofIds(newArrayofIds);

    //update number displayed on shopping card
    setNumberofItems(String(newArrayofIds.length));
  };

  //when minus button is clicked
  const handleDecrease = (id: number) => {
    //move id to firs position in array
    arrayofIds.unshift(arrayofIds.splice(arrayofIds.indexOf(id), 1)[0]);

    //slice ar first position
    const decreasedArrayofIds = arrayofIds.slice(1);

    //set status of arrayofIds to mutated array
    setArrayofIds(decreasedArrayofIds);

    //update number displayed on shopping card
    setNumberofItems(String(decreasedArrayofIds.length));
  };

  if (numberofItems !== '0') {
    return (
      <div>
        <Layout numberofItems={numberofItems}>
          <Head>
            <title>Shopping Bag</title>
          </Head>
          <main>
            <div css={container}>
              <table>
                <tbody>
                  <tr>
                    <td css={white} colSpan={6}>
                      <h1 css={title}>Your Shopping Bag</h1>
                    </td>
                  </tr>
                  <tr css={white}>
                    <th></th>
                    <th>Quantity</th>
                    <th>Item</th>
                    <th>Size</th>
                    <th>Prize</th>
                    <th>Options</th>
                  </tr>
                  {shoppingBag.map((shoe: SingleShoe) => (
                    <tr key={shoe.id}>
                      <td>
                        <Link href={`/shoes/${shoe.id}`}>
                          <img
                            css={tinyImg}
                            src={`${shoe.image}`}
                            alt="shoe"
                          ></img>
                        </Link>
                      </td>
                      <td>
                        <button
                          data-cy="increase-button"
                          css={smallbutton}
                          onClick={(item) => handleIncrease(shoe.id)}
                        >
                          {' '}
                          +
                        </button>{' '}
                        {shoe.amount}{' '}
                        <button
                          data-cy="decrease-button"
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
                        <button
                          data-cy="delete-button"
                          onClick={(item) => handleDelete(shoe.id)}
                        >
                          Delete All
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr css={totalAmount}>
                    <td>Total:</td>
                    <td data-cy="total">{numberofItems}</td>
                    <td></td>
                    <td></td>
                    <td>{totalSum} €</td>
                    <td>
                      <Link href={`/check-out`}>
                        <button data-cy="pay-now">Pay now</button>
                      </Link>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td css={white} colSpan={6}>
                      <Link href={'/shoes/product-list'}>
                        <button css={shopmore}>Shop more</button>
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
        <Layout numberofItems={numberofItems}>
          <Head>
            <title>Shopping Bag</title>
          </Head>
          <main>
            <div css={container}>
              <h1 css={emptytitle}>
                Your Shopping Bag is empty!
                <Link href="/shoes/product-list">
                  <button css={backhome}>Back to shop</button>
                </Link>
              </h1>
            </div>
          </main>
        </Layout>
      </div>
    );
  }
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  //comes from next-cookie
  const allCookies = nextCookies(context);

  const numberofItems = allCookies.numberofItems || '0';
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
