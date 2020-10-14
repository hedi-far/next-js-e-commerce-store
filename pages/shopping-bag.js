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

  //set state for shoppingBag array
  const [shoppingBag, setShoppingBag] = useState(props.shoppingBag);

  //set state for numberofItems array
  const [numberofItems, setNumberofItems] = useState(props.numberofItems);
 
  // //set state for price array
  // const [totalArray, setTotalArray] = useState (props.totalArray);

  //set state for sum array
  let [totalSum, setTotalSum] = useState (props.totalSum);

  
  //set cookie for shopping bag
  useEffect(() => {
    Cookies.set('shoppingBag', shoppingBag);
  }, [shoppingBag]);

  //set cookie with number of shopping bag items
  useEffect(() => {
    Cookies.set('numberofItems', numberofItems);
  }, [numberofItems]);

  //  //set cookie with prices
  //  useEffect(() => {
  //   Cookies.set('totalArray', totalArray);
  // }, [totalArray]);

  //set cookie with prices
  useEffect(() => {
    Cookies.set('totalSum', totalSum);
  }, [totalSum]);

  const handleDelete = (id, price) => {
    
    const idtoRemove = id;

    const filteredshoppingBag = props.shoppingBag.filter((item) => item.id !== idtoRemove);

   setShoppingBag(filteredshoppingBag);
   
   setNumberofItems(filteredshoppingBag.length);

  //  const pricetoRemove = price;

    // const filteredTotalArray = props.totalArray.filter((item) => item.price !== pricetoRemove);

    // setTotalArray(filteredTotalArray);

    //   const newTotalSum = filteredTotalArray.reduce(function (accumulator, currentValue) {
    //   return accumulator + currentValue;
    // }, 0); 

    const newTotalSum = filteredshoppingBag.reduce(function(prev, cur) {
      return prev + cur.price;
    }, 0);

    setTotalSum(newTotalSum);

    

    

  }

  // console.log(props.totalArray)
  // console.log(props.totalSum)
     

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
                {props.shoppingBag.map((shoe) => (
                  <tr key={shoe.id}>
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
                      handleDelete(shoe.id, shoe.price) 
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
                  <td>{props.totalSum} €</td>

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
  const totalSum = allCookies.totalSum || 0;
  const totalArray = allCookies.totalArray || [];
  
 
       

  return {
    props: {  
            shoppingBag, 
            totalArray,
            numberofItems,
            totalSum
            },
  };
}