import { shoes } from '../../database';
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

  //When 'Add to bag' button is clicked:
  const handleAddtoBag = (name, image, size, price) => {
    //creating new array newshoppingBag by adding incoming values to array "shoppingBag" (=inital state)
    const newShoppingBag = shoppingBag.concat({ name, image, size, price });

    setShoppingBag(newShoppingBag);

    //number of Items in the shopping bag
    setNumberofItems(newShoppingBag.length);

    const newTotal = total.concat(price);

    setTotal(newTotal);
    
  };

  const shoe = shoes.find((currentShoe) => {
    if (currentShoe.id === props.id) {
      return true;
    }

    return false;
  });

  return (
    <Layout>
      <Head>
        <title>{shoe.name}</title>
      </Head>

      <div css={shoeInfo}>
        <img css={img} src={shoe.image} alt={shoe.name}></img>

        <ul css={ul}>
          <li css={shoename}>{shoe.name}</li>
          <p>
            <li css={description}>{shoe.description}</li>
          </p>
          <li css={info2}>Size: {shoe.size}</li>
          <li css={info2}>Price: {shoe.price}€</li>
          <br />

          <button
            onClick={(item) =>
              handleAddtoBag(shoe.name, shoe.image, shoe.size, shoe.price)
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
export function getServerSideProps(context) {

  //comes from next-cookie
  const allCookies = nextCookies(context);

  const shoppingBag = allCookies.shoppingBag || [];
  const numberofItems = allCookies.numberofItems || 0;
  const total = allCookies.total || [];
  

  console.log(total)
      
  // //cookieString: "shoppingBag=[{%22name%22:%22Black%20Pumps%22%2C%22image%22:%22/images/pumps_black.jpg%22%2C%22size%22:%2241%22%2C%22price%22:%2227%22}]; numberofItems=1"
  // const cookieString = JSON.stringify(context.req.headers.cookie);
  
  // //returns the index of ] in respective cookieString
  // const index = cookieString.lastIndexof(']');

  // let shoppingBag = cookieString.substring(0, index);// shorten cookieString after ] and returns substring from index 0]'
    
  // shoppingBag = shoppingBag.split('shoppingBag=[', ']') || []; //splits substring after '[' and before ']';
    
  // const numberofItems = context.req.headers.cookie.split(';', 'numberofItems=')|| 0 ;

      
// console.log(typeof cookieString);
// // console.log(index);

  return {
    props: { id: context.query.id, 
            shoppingBag, 
            numberofItems,
            total },
  };
}
