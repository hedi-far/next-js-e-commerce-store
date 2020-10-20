import Layout from '../../components/Layout';
import Head from 'next/head';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import nextCookies from 'next-cookies';
import Link from 'next/link';

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
  shoeInfo & {
    font-size: 22px !important;
  }
`;

const ul = css`
  list-style-type: none;
`;

const shoename = css`
  ul & {
    font-size: 48px;
  }
`;

const spacearound = css`
  margin: 10px;
`;

export default function Shoe(props) {
  //set state of ids of selected shoes
  const [arrayofIds, setArrayofIds] = useState(props.arrayofIds);

  //set state for number of items as displayed on shopping bag icon
  const [numberofItems, setNumberofItems] = useState(props.numberofItems);

  //set cookie with number of shopping bag items
  useEffect(() => {
    Cookies.set('numberofItems', numberofItems);
  }, [numberofItems]);

  //set cookie with ids of selected shoes
  useEffect(() => {
    Cookies.set('arrayofIds', arrayofIds);
  }, [arrayofIds]);

  //When 'Add to bag' button is clicked:
  const handleAddtoBag = (id) => {
    const newArrayofIds = arrayofIds.concat(id);

    setArrayofIds(newArrayofIds);

    //set number of Items in the shopping bag
    setNumberofItems(newArrayofIds.length);
  };

  return (
    <Layout numberofItems={numberofItems}>
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
          <li>Article-Nr. {props.shoe[0].id}</li>
          <br />
          <li css={info2}>Size: {props.shoe[0].size}</li>
          <li css={info2}>Price: {props.shoe[0].price}€</li>
          <br />
          <button onClick={(item) => handleAddtoBag(props.shoe[0].id)}>
            Add to bag
          </button>
          <Link href="/shoes/product-list">
            <button css={spacearound}>Shop more</button>
          </Link>
          <Link href="/shopping-bag">
            <button>Go to bag</button>
          </Link>
        </ul>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const allCookies = nextCookies(context);
  const numberofItems = allCookies.numberofItems || 0;
  const arrayofIds = allCookies.arrayofIds || [];

  // dynamic import, imports single shoe from databse
  const { getShoeById } = await import('../../util/database');
  const id = parseInt(context.query.id);
  const shoe = await getShoeById(id);

  // dynamic import, import ALL shoes from databse
  const { getShoes } = await import('../../util/database');
  const shoes = await getShoes();

  return {
    props: {
      shoes,
      arrayofIds,
      id,
      numberofItems,
      shoe,
    },
  };
}
