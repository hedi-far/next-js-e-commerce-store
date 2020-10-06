/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';

const footer = css`
  display: flex;
  justify-content: flex-end;
  border-top: 0.2px;
  margin-top: 100px;
`;

const a = css`
  font-family: 'Quicksand', sans-serif;
  font-size: 25x;
  padding: 10px;
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
