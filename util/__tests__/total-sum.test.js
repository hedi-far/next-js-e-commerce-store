//run 'yarn jest' to run tests

import { total } from '../total-sum.js';

//test cart sum function

//test in case two items have amount of 1
const shoppingBag = [
  {
    id: 2,
    name: 'Hiking Shoes',
    description: '...',
    size: 43,
    price: 65,
    image: '/images/hiking_shoes.jpg',
    inBag: true,
    amount: 1,
  },
  {
    id: 3,
    name: 'Black Pumps',
    description: '...',
    size: 41,
    price: 27,
    image: '/images/pumps_black.jpg',
    inBag: true,
    amount: 1,
  },
];
test('adds up price of all items in the shopping cart', () => {
  expect(total(shoppingBag)).toBe(92);
});

//test in case two items have amount > 1
const shoppingBag2 = [
  {
    id: 2,
    name: 'Hiking Shoes',
    description: '...',
    size: 43,
    price: 65,
    image: '/images/hiking_shoes.jpg',
    inBag: true,
    amount: 3,
  },
  {
    id: 3,
    name: 'Black Pumps',
    description: '...',
    size: 41,
    price: 27,
    image: '/images/pumps_black.jpg',
    inBag: true,
    amount: 5,
  },
];
test('adds up price of all items in the shopping cart', () => {
  expect(total(shoppingBag2)).toBe(330);
});
