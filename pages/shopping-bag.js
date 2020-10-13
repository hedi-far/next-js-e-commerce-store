import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
// import { shoes } from '../database';
import nextCookies from 'next-cookies';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';




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

export default function CheckOut(props) {

  console.log(props.shoppingBag)

  //set state for shoppingBag array
  const [shoppingBag, setShoppingBag] = useState(props.shoppingBag);

  //set state for numberofItems array
  const [numberofItems, setNumberofItems] = useState(props.numberofItems);
  //set state for total price array
  const [total, setTotal] = useState (props.total);

  //set cookie for shopping bag
  useEffect(() => {
    Cookies.set('shoppingBag', shoppingBag);
  }, [shoppingBag]);

  //set cookie with number of shopping bag items
  useEffect(() => {
    Cookies.set('numberofItems', numberofItems);
  }, [numberofItems]);

   //set cookie with prices
   useEffect(() => {
    Cookies.set('total', total);
  }, [total]);

  const handleDelete = (name, price) => {
    const nametoRemove = name;

    const filteredshoppingBag = props.shoppingBag.filter((item) => item.name !== nametoRemove);

   setShoppingBag(filteredshoppingBag);
   
   setNumberofItems(filteredshoppingBag.length);

  //  const newTotal = total.concat(price);

    setTotal(newTotal);

  }
     

  if (props.shoppingBag && props.total) {

  
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
                {props.shoppingBag.map((shoe) => (
                  <tr key={shoe.name}>
                    <td>
                      <img css={tinyImg} src={`${shoe.image}`} alt="shoe"></img>
                    </td>
                    <td>1</td>
                    <td>{shoe.name}</td>
                    <td>{shoe.size}</td>
                    <td>{shoe.price} €</td>
                    <td>
                      <button 
                      onClick={(item) =>
                      handleDelete(shoe.name, shoe.price) 
                    }
                    >Delete
                    </button>
                    </td>
                  </tr>
                ))}
                <tr css={totalAmount}>
                  <td >Total:</td>
                  <td>{props.numberofItems}</td>
                  <td></td>
                  <td></td>
                  <td>{props.total} €</td>

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
}; 

export function getServerSideProps(context) {

  //comes from next-cookie
  const allCookies = nextCookies(context);
  const numberofItems = allCookies.numberofItems || 0;
  const shoppingBag = allCookies.shoppingBag || [];

  let totalString = allCookies.total || [0,0];

  console.log(totalString)
 
  totalString = totalString.map(function (x) { 
    return parseInt(x, 10); 
  });
  const totalArray = totalString.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0); 

  const total = totalArray;

  // console.log(shoppingBag)
  // console.log(numberofItems)
  // console.log(total)

          

  return {
    props: {  
            shoppingBag, 
            total,
            numberofItems
            },
  };
}