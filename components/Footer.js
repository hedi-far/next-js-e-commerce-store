/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';

const footer = css`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  background-color: #1c2826;
  border-top: 1px;
  margin-top: 30px;
`;

const a = css`
  color: #f2f3ae;
  font-family: 'Quicksand', sans-serif;
  font-size: 8x;
  margin-right: 15px;
  cursor: pointer;
`;

export default function Footer() {
  return (
    <footer css={footer}>
      <Link href="/">
        <a css={a}>About us</a>
      </Link>
      <Link href="/">
        <a css={a}>Contact Us</a>
      </Link>

      <Link href="/">
        <a css={a}>Terms of Service</a>
      </Link>
    </footer>
  );
}
