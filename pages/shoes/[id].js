// import { shoes } from '../../util/database';
import Layout from '../../components/Layout';
import Head from 'next/head';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
// import Button from '../../components/Button';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import nextCookies from 'next-cookies';

const img = css`
  width: 700px;
  margin-left: 30px;
  border-radius: 20%;
`;

const shoeInfo = css`
  display: flex;
  justify-content: flex-start;
  margin-top: 80px;
  font-size: 18px;
`;

const description = css`
  margin-right: 50px;
`;

const info2 = css`
font-size: 22px !important;
&shoeInfo 
`;

const ul = css`
  list-style-type: none;
`;

const shoename = css`
font-size: 48px;
&ul
`;

export default function Shoe(props) {

   
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

  //When 'Add to bag' button is clicked:
  const handleAddtoBag = (name, image, size, price) => {
    //creating new array newshoppingBag by adding incoming values to array "shoppingBag" (=inital state)
    const newShoppingBag = shoppingBag.concat({ name, image, size, price });

    // adds an incrementing id to each object
    newShoppingBag.forEach((o, i) => (o.id = i + 1)); 

    setShoppingBag(newShoppingBag);

    //number of Items in the shopping bag
    setNumberofItems(newShoppingBag.length);

    // const newTotalArray = totalArray.concat({price});

    // setTotalArray(newTotalArray);

    //   const newTotalSum = newTotalArray.reduce(function (accumulator, currentValue) {
    //   return accumulator + currentValue;
    // }, 0); 

          
     const newTotalSum =newShoppingBag.reduce(function(prev, cur) {
      return prev + cur.price;
    }, 0);

    setTotalSum(newTotalSum);
              
  };

    return (
    <Layout numberofItems={numberofItems} >
      <Head>
        <title>{props.shoe[0].name}</title>
      </Head>

      <div css={shoeInfo}>
        <img css={img} src={props.shoe[0].image} alt={props.shoe[0].name}></img>

        <ul css={ul}>
          <li css={shoename}>{props.shoe[0].name}</li>
          <p>
            <li css={description}>{props.shoe[0].description}</li>
          </p>
          <li css={info2}>Size: {props.shoe[0].size}</li>
          <li css={info2}>Price: {props.shoe[0].price}€</li>
          <br />

          <button
            onClick={(item) =>
              handleAddtoBag(props.shoe[0].name, props.shoe[0].image, props.shoe[0].size, props.shoe[0].price)
            }
          >
            Add to bag
          </button>
        </ul>
      </div>
    </Layout>
  );
}


//This is run by Next.js BEFORE the component above
//is run, and passes in the props - all of this is inside the server!
//This does not show up in the browser
export async function getServerSideProps(context) {

  //comes from next-cookie
  const allCookies = nextCookies(context);

  const shoppingBag = allCookies.shoppingBag || [];
  const numberofItems = allCookies.numberofItems || 0;
  // const totalArray = allCookies.totalArray || [];
  const totalSum = allCookies.totalSum || 0;

   
// dynamic import, imports single shoe from databse
const { getShoeById }  =  await import ('../../util/database')
const id = parseInt(context.query.id)
const shoe = await getShoeById(id);

return {
    props: { id, 
            shoppingBag, 
            numberofItems,
            // totalArray,
            shoe,
            totalSum },
  };
}
