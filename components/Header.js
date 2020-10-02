import Link from 'next/link';

export default function Header() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 30,
        background: '#eee',
        marginBottom: 40,
      }}
    >
      Logo
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/shopping-cart">
        <a>Shopping Cart</a>
      </Link>
    </header>
  );
}
