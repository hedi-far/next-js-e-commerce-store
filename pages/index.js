import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const shoes = [
  { id: '1', name: 'baby shoes', size: '22', price: '45' },
  { id: '2', name: 'hiking_shoes', size: '43', price: '65' },
  { id: '3', name: 'pumps_black', size: '41', price: '27' },
  { id: '4', name: 'pumps_pink', size: '40', price: '119' },
  { id: '5', name: 'pumps_pink', size: '37', price: '580' },
  { id: '6', name: 'sneaker_pink', size: '40', price: '19' },
  { id: '7', name: 'sneaker_superhero', size: '44', price: '99' },
  { id: '8', name: 'sneaker_white', size: '43', price: '15' },
  { id: '9', name: 'wedges', size: '37', price: '23' },
];

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Shoe-be-doo!</title>
        </Head>

        <main>
          <h1>Welcome to Shoe-be-do Shoe Outlet"</h1>
          <ul>
            {shoes.map((shoe) => {
              return <li key={shoe.id}>
                <Link href= /></Link> //video 01:51:11
                {shoe.name}</li>;
            })}
            ;
          </ul>
          ; Product Pics here!
          {/* <img>src="/images/hiking_shoes.jpg" alt="hiking shoes"></img> */}
        </main>
      </Layout>
    </div>
  );
}
