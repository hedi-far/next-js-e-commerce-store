import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import nextCookies from 'next-cookies';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { mergeItems } from '../util/merge-items';

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
  const [shoppingBag, setShoppingBag] = useState(props.shoes);

  //set state for numberofItems in case an item is deleted
  const [numberofItems, setNumberofItems] = useState(props.numberofItems);

  //set state of ids of selected shoes in case an item is deleted
  const [arrayofIds, setArrayofIds] = useState(props.arrayofIds);
   
  //set state for sum array in case an item is deleted
  const [totalSum, setTotalSum] = useState ();

  
  //set cookie with number of shopping bag items in case an item is deleted
  useEffect(() => {
    Cookies.set('numberofItems', numberofItems);
  }, [numberofItems]);

   //find in ALL shoes which ids are in array of ids > 
  useEffect(() => {
      setShoppingBag(
      mergeItems(props.shoes, props.arrayofIds),
    );
      }, [arrayofIds]);
    
    //shoppingBagId is added to each item
    shoppingBag.forEach((o, i) => (o.shoppingBagId = i + 1)); 
           
    console.log(shoppingBag)
  
    //calculate sum of items in shoppingBag
  useEffect(() =>{
  const newTotalSum = shoppingBag.reduce(function(prev, cur) {
    return prev + cur.price;
  }, 0);

  setTotalSum(newTotalSum) }, [shoppingBag]);

//delete function
  const handleDelete = (shoppingBagId) => {
    
    const idtoRemove = shoppingBagId;

    const filteredshoppingBag = props.shoppingBag.filter((item) => item.shoppingBagId !== idtoRemove);

   setShoppingBag(filteredshoppingBag);
   
   setNumberofItems(filteredshoppingBag.length);
    

  }


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
                  <tr key={shoe.shoppingBagId}>
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
                      handleDelete(shoe.shoppingBagId) 
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
                  <td>{totalSum} €</td>

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

export async function getServerSideProps(context) {

  //comes from next-cookie
  const allCookies = nextCookies(context);

  const numberofItems = allCookies.numberofItems || 0;
  const arrayofIds = allCookies.arrayofIds || [];

  // dynamic import, imports all shoes from databse
const { getShoes }  =  await import ('../util/database')
// const id = parseInt(context.query.id)
const shoes = await getShoes();
   

  return {
    props: {  
      arrayofIds,
      numberofItems,
      shoes
            },
  };
}