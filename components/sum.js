//set state for sum array in case an item is deleted
import { useState } from 'react';

export function Sum(shoppingBag) {
  const [totalSum, setTotalSum] = useState(
    shoppingBag.reduce(function (prev, cur) {
      return prev + cur.price;
    }, 0),
  );
}
