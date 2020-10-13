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

