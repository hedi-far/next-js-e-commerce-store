import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Cookies from 'js-cookie';
import nextCookies from 'next-cookies';
import Layout from '../../components/Layout';

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

const shoeName = css`
  ul & {
    font-size: 48px;
  }
`;

const spaceAround = css`
  margin: 10px;
`;

//Type definitions
type SingleShoe = {
  id: number;
  image: string;
  name: string;
  description: string;
  size: number;
  price: number;
};

type Props = {
  arrayOfIds: number[];
  numberOfItems: string;
  shoe: SingleShoe[];
};

export default function Shoe(props: Props) {
  //set state of ids of selected shoes
  const [arrayOfIds, setArrayOfIds] = useState(props.arrayOfIds);

  //set state for number of items as displayed on shopping bag icon
  const [numberOfItems, setNumberOfItems] = useState<string>(
    props.numberOfItems,
  );

  //set cookie with number of shopping bag items
  useEffect(() => {
    Cookies.set('numberOfItems', numberOfItems);
  }, [numberOfItems]);

  //set cookie with ids of selected shoes
  useEffect(() => {
    Cookies.set('arrayOfIds', arrayOfIds);
  }, [arrayOfIds]);

  //When 'Add to bag' button is clicked:
  const handleAddToBag = (id: number) => {
    const newArrayOfIds = arrayOfIds.concat(id);

    setArrayOfIds(newArrayOfIds);

    //set number of Items in the shopping bag
    setNumberOfItems(String(newArrayOfIds.length));
  };

  return (
    <Layout numberOfItems={numberOfItems}>
      <Head>
        <title data-cy="product-name">{props.shoe[0].name}</title>
      </Head>

      <div css={shoeInfo}>
        <img css={img} src={props.shoe[0].image} alt={props.shoe[0].name}></img>

        <ul css={ul}>
          <li css={shoeName}>{props.shoe[0].name}</li>
          <p>
            <li css={description}>{props.shoe[0].description}</li>
          </p>
          <li>Article-Nr. {props.shoe[0].id}</li>
          <br />
          <li css={info2}>Size: {props.shoe[0].size}</li>
          <li css={info2}>Price: {props.shoe[0].price}€</li>
          <br />
          <button
            onClick={(item) => handleAddToBag(props.shoe[0].id)}
            data-cy={'add-to-bag-button'}
          >
            Add to bag
          </button>
          <Link href="/shoes/product-list">
            <button css={spaceAround}>Shop more</button>
          </Link>
          <Link href="/shopping-bag">
            <button>Go to bag</button>
          </Link>
        </ul>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const allCookies = nextCookies(context);
  const numberOfItems = allCookies.numberOfItems || '0';
  const arrayOfIds = allCookies.arrayOfIds || [];

  // dynamic import, imports single shoe from database
  const { getShoeById } = await import('../../util/database');

  const id = Number(context.query.id);
  const shoe = await getShoeById(id);

  // dynamic import, import ALL shoes from database
  const { getShoes } = await import('../../util/database');
  const shoes = await getShoes();

  return {
    props: {
      shoes,
      arrayOfIds,
      id,
      numberOfItems,
      shoe,
    },
  };
}
