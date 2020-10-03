import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Shoe-be-doo!</title>
        </Head>

        <main>
          <h1>Welcome to Shoe-be-do Shoe Outlet"</h1>
          <img style={{ width: '300px' }} src="/logo.png" alt="logo"></img>
          <p> Blabla descriptopn </p>
          <Link href="/shoes/product-list">
            <a>Our products</a>
          </Link>
        </main>
      </Layout>
    </div>
  );
}
