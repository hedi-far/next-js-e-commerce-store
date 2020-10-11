import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
// import { shoes } from '../database';
import nextCookies from 'next-cookies';



const white = css`
  background-color: #ffffff !important;
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

export default function CheckOut(props) {

    
  return (
    <div>
      <Layout>
        <Head>
          <title>Shopping Bag</title>
        </Head>
        <main>
          <div css={container}>
            <table>
              <tbody>
                <tr>
                  <td css={white} colSpan="5">
                    <h1 css={title}>Your Shopping Bag</h1>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <th>Item</th>
                  <th>Size</th>
                  <th>Prize</th>
                  <th></th>
                </tr>
                {props.shoppingBag.map((shoe) => (
                  <tr key={shoe.name}>
                    <td>
                      <img css={tinyImg} src={`${shoe.image}`} alt="shoe"></img>
                    </td>
                    <td>{shoe.name}</td>
                    <td>{shoe.size}</td>
                    <td>{shoe.price} €</td>
                    <td></td>
                  </tr>
                ))}
                <tr>
                  <td>Total:</td>
                  <td></td>
                  <td></td>
                  <td css={totalamount}>{props.total} €</td>
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
}

export function getServerSideProps(context) {

  //comes from next-cookie
  const allCookies = nextCookies(context);

  
  const shoppingBag = allCookies.shoppingBag 
  let totalString = allCookies.total 
  totalString = totalString.map(function (x) { 
    return parseInt(x, 10); 
  });
  const totalArray = totalString.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0); 

  const total = totalArray || [];

  
  
      
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
    props: {  
            shoppingBag, 
            total
            },
  };
}