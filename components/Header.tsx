/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';

const header = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  font-size: 15px;
`;

const icon = css`
  height: 55px;
`;

const a = css`
  font-family: 'Quicksand', sans-serif;
  font-size: 25x;
  padding: 10px;
  cursor: pointer;
`;

const cartitems = css`
  text-align: center;
  height: 20px;
  width: 20px;
  background-color: #c8c6c3;
  border-radius: 100%;
  z-index: 1;
  margin-right: -30px;
  text-decoration: none !important;
  cursor: pointer;
`;

const nocartitems = css`
  display: none;
`;

type Props = {
  numberofItems: string,
 };


export default function Header(props: Props) {
  //when shopping cart is empty, an empty shopping bag item is displayed!
  let numberofItems = props.numberofItems;
  if (numberofItems === undefined || numberofItems === '0') {
    numberofItems = "";
  }

  return (
    <header css={header}>
      <Link href="/">
        <a css={a}>Home</a>
      </Link>
      <Link href="/shoes/product-list">
        <a css={a}>All Products</a>
      </Link>
      <Link href="/">
        <a css={a}>New In</a>
      </Link>
      <Link href="/">
        <a css={a}>On Sale</a>
      </Link>
      <Link href="/shopping-bag">
        <a css={numberofItems ? cartitems : nocartitems}>{numberofItems}</a>
      </Link>
      <Link href="/shopping-bag">
        <a css={a}>
          <img
            css={icon}
            src="/icons8-einkaufstasche-100.png"
            alt="shopping bag"
          ></img>
        </a>
      </Link>
    </header>
  );
}
