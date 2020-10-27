import { useRouter } from 'next/router';

//function to re-render components and
//immediately display changes in shoppingBag

// export function Reload() {
//   const router = useRouter();

//   return router.push('/shopping-bag');
// }

export function Reload() {
  const router = useRouter();

  return <button onClick={() => router.reload()}>Refresh</button>;
}
