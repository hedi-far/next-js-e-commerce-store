import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import nextCookies from 'next-cookies';
import Cookies from 'js-cookie';
import Layout from '../components/Layout';
import { finalBag } from '../util/final-bag';
import { total } from '../util/total-sum';
import { GetServerSidePropsContext } from 'next';

const white = css`
  background-color: #ffffff !important;
`;

const emptyTitle = css`
  display: flex;
  justify-content: center;
  margin-bottom: 300px;
  margin-top: 210px;
  margin-left: 50px;
`;

const backHome = css`
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
const smallButton = css`
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

const shopMore = css`
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
  arrayOfIds: number[];
  numberOfItems: string;
  shoe: SingleShoe[];
  shoes: {};
};

export default function CheckOut(props: Props) {
  //set state for shoppingBag array
  //eslint-disable-next-line no-unused-vars
  const [shoppingBag, setShoppingBag] = useState(
    finalBag(props.shoes, props.arrayOfIds),
  );

  //calculate price of each item based on amount to display in shopping bag
  const calculatedPrice = (shoePrice: number, shoeAmount: number) => {
    return shoePrice * shoeAmount;
  };
  //set state for total sum
  const [totalSum, setTotalSum] = useState(total(shoppingBag));

  //set state for numberOfItems - displayed on shopping bag icon
  const [numberOfItems, setNumberOfItems] = useState(props.numberOfItems);

  //set state of ids of selected shoes
  const [arrayOfIds, setArrayOfIds] = useState(props.arrayOfIds);

  //set cookie with number of shopping bag items
  useEffect(() => {
    Cookies.set('numberOfItems', numberOfItems);
  }, [numberOfItems, props.shoes]);

  //set cookie with IDs of shopping bag items
  useEffect(() => {
    Cookies.set('arrayOfIds', arrayOfIds);
    setShoppingBag(finalBag(props.shoes, arrayOfIds));
  }, [arrayOfIds, props.shoes]);

  //set totalSum on every change in shoppingBag
  useEffect(() => {
    setTotalSum(total(shoppingBag));
  }, [shoppingBag]);

  //delete function - mutates original array
  const handleDelete = (id: number) => {
    const filteredArrayOfIds = arrayOfIds.filter(
      (idToRemove) => idToRemove !== id,
    );

    //set status of arrayOfIds to mutated array
    setArrayOfIds(filteredArrayOfIds);

    //update number displayed on shopping card
    setNumberOfItems(String(filteredArrayOfIds.length));
  };

  //when plus button is clicked
  const handleIncrease = (id: number) => {
    //add id of item to shopping bag
    const newArrayOfIds = arrayOfIds.concat(id);

    //set status of arrayOfIds to mutated array
    setArrayOfIds(newArrayOfIds);

    //update number displayed on shopping card
    setNumberOfItems(String(newArrayOfIds.length));
  };

  //when minus button is clicked
  const handleDecrease = (id: number) => {
    //move id to firs position in array
    arrayOfIds.unshift(arrayOfIds.splice(arrayOfIds.indexOf(id), 1)[0]);

    //slice ar first position
    const decreasedArrayOfIds = arrayOfIds.slice(1);

    //set status of arrayOofIds to mutated array
    setArrayOfIds(decreasedArrayOfIds);

    //update number displayed on shopping card
    setNumberOfItems(String(decreasedArrayOfIds.length));
  };

  if (numberOfItems !== '0') {
    return (
      <div>
        <Layout numberOfItems={numberOfItems}>
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
                          css={smallButton}
                          onClick={(item) => handleIncrease(shoe.id)}
                        >
                          {' '}
                          +
                        </button>{' '}
                        {shoe.amount}{' '}
                        <button
                          data-cy="decrease-button"
                          css={smallButton}
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
                    <td data-cy="total">{numberOfItems}</td>
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
                        <button css={shopMore}>Shop more</button>
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
        <Layout numberOfItems={numberOfItems}>
          <Head>
            <title>Shopping Bag</title>
          </Head>
          <main>
            <div css={container}>
              <h1 css={emptyTitle}>
                Your Shopping Bag is empty!
                <Link href="/shoes/product-list">
                  <button css={backHome}>Back to shop</button>
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

  const numberOfItems = allCookies.numberOfItems || '0';
  const arrayOfIds = allCookies.arrayOfIds || [];

  // dynamic import, imports all shoes from database
  const { getShoes } = await import('../util/database');
  const shoes = await getShoes();

  return {
    props: {
      arrayOfIds,
      numberOfItems,
      shoes,
    },
  };
}
