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

const total = css`
font-weight: bold;
`;

export default function CheckOut(props) {

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
                  <td css={white} colSpan="5">
                    <h1 css={title}>Your Shopping Bag</h1>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <th>Quantity</th>
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
                    <td>1</td>
                    <td>{shoe.name}</td>
                    <td>{shoe.size}</td>
                    <td>{shoe.price} €</td>
                    <td></td>
                  </tr>
                ))}
                <tr>
                  <td css={total}>Total:</td>
                  <td>{props.numberofItems}</td>
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