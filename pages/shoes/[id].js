import { useState } from 'react';
import { shoes } from '../../database';
import Layout from '../../components/Layout';
import Head from 'next/head';

export default function Shoe(props) {
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

      <div>
        article nr #{props.id}
        <br />
        shoe name: {shoe.name} <br />
        shoe size: {shoe.size} <br />
        price: {shoe.price}€
        <br />
        <img style={{ width: '400px' }} src={shoe.image} alt={shoe.name}></img>
        <br />
        {/* save the id attribute of the item */}
        <button>add to cart</button>
      </div>
    </Layout>
  );
}

//This is run by Next.js BEFORE the component above
//is run, and passes in the props - all of this is inside the server!
//This does not show up in the browser
export function getServerSideProps(context) {
  // console.log(context);
  return {
    props: { id: context.query.id },
  };
}
