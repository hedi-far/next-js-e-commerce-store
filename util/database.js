import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();

const sql = postgres();

// If you want to use the connection string instead for testing,
// you can try this:
//
// const sql = postgres('postgres://username:password@localhost:5432/database')

export async function getShoes() {
  const shoes = await sql`
    SELECT * FROM shoes;
  `;
return shoes;

};

export async function getShoeById(id) {
  // Return undefined if the id is not
  // in the correct format
  // if (!/^\d+$/.test(id)) return undefined;

  const shoe = await sql`
    SELECT * FROM shoes WHERE id = ${id};
  `;
  return shoe;

  
};



// export const shoes = [
//   
//   {
//     id: '2',

//     name: 'Hiking Shoes',
//     description:
//       'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
//     size: '43',
//     price: '65',
//     image: '/images/hiking_shoes.jpg',
//   },
//   {
//     id: '3',
//     name: 'Black Pumps',
//     description:
//       'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
//     size: '41',
//     price: '27',
//     image: '/images/pumps_black.jpg',
//   },
//   {
//     id: '4',
//     name: 'Pink Pumps',
//     description:
//       'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
//     size: '40',
//     price: '119',
//     image: '/images/pumps_pink.jpg',
//   },
//   {
//     id: '5',
//     name: 'Red Pumps',
//     description:
//       'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
//     size: '37',
//     price: '580',
//     image: '/images/pumps_red.jpg',
//   },
//   {
//     id: '6',
//     name: 'Pink Sneakers',
//     description:
//       'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
//     size: '40',
//     price: '19',
//     image: '/images/sneaker_pink.jpg',
//   },
//   {
//     id: '7',
//     name: 'Superhero Sneaker',
//     description:
//       'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
//     size: '44',
//     price: '99',
//     image: '/images/sneaker_superhero.jpg',
//   },
//   {
//     id: '8',
//     name: 'White Sneaker',
//     description:
//       'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
//     size: '43',
//     price: '15',
//     image: '/images/sneaker_white.jpg',
//   },
//   {
//     id: '9',
//     name: 'Brown wedges',
//     description:
//       'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
//     size: '37',
//     price: '23',
//     image: '/images/wedges_brown.jpg',
//   },
//   {
//     id: '10',
//     name: 'Yellow Sneakers',
//     description:
//       'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
//     size: '39',
//     price: '23',
//     image: '/images/sneaker_yellow.jpg',
//   },
//   {
//     id: '11',
//     name: 'Black leather shoes',
//     description:
//       'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
//     size: '44',
//     price: '110',
//     image: '/images/leather_black.jpg',
//   },
//   {
//     id: '12',
//     name: 'Brown leather shoes',
//     description:
//       'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
//     size: '46',
//     price: '312',
//     image: '/images/leather_brown.jpg',
//   },
// ];
