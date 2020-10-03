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
      <img style={{ width: '100px' }} src="/logo.png" alt="logo"></img>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/shoes/product-list">
        <a>Our products</a>
      </Link>
      <Link href="/shopping-cart">
        <a>
          <img
            style={{ width: '50px', height: '50px' }}
            src="/icons8-einkaufstasche-100.png"
            alt="shopping bag"
          ></img>
        </a>
      </Link>
    </header>
  );
}
