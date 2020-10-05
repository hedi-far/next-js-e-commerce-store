/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';

const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #1c2826;
  font-size: 26px;
  cursor: pointer;
`;

const logo = css`
  width: 100px;
  background-color: #f2f3ae;
  z-index: 2;
  border-radius: 70%;
  margin-left: 20px;
  margin-bottom: 5px;
`;

const icon = css`
  height: 70px;
  z-index: 2;
  background-color: #f2f3ae;
  border-radius: 70%;
  margin-right: 20px;
`;

const a = css`
  color: #f2f3ae;
  font-family: 'Fredericka the Great', cursive;
`;

export default function Header() {
  return (
    <header css={header}>
      <Link href="/">
        <img css={logo} src="/logo.png" alt="logo"></img>
      </Link>
      <Link href="/shoes/product-list">
        <a css={a}>All Products</a>
      </Link>
      <Link href="/shoes/product-list">
        <a css={a}>SALE</a>
      </Link>
      <Link href="/shoes/product-list">
        <a css={a}>New in</a>
      </Link>
      <Link href="/shopping-cart">
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
