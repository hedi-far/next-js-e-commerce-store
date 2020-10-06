import { shoes } from '../../database';
import Layout from '../../components/Layout';
import Head from 'next/head';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

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

const info2 = css`
font-size: 22px !important;
& shoeInfo 
`;

const ul = css`
  list-style-type: none;
`;

const name = css`
font-size: 48px;
& ul
`;

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

      <div css={shoeInfo}>
        <img css={img} src={shoe.image} alt={shoe.name}></img>

        <ul css={ul}>
          <li css={name}>{shoe.name}</li>
          <p>
            <li>{shoe.description}</li>
          </p>
          <li css={info2}>Size: {shoe.size}</li>
          <li css={info2}>Price: {shoe.price}€</li>
          <br />
          <button>Bag it!</button>
        </ul>
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
