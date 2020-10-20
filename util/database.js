import postgres from 'postgres';
import dotenv from 'dotenv';

//connection to database is established
dotenv.config();

const sql = postgres();

//query all shoes from database
export async function getShoes() {
  const shoes = await sql`
    SELECT * FROM shoes;
  `;
  return shoes;
}

//query single shoes from database
export async function getShoeById(id) {
  const shoe = await sql`
    SELECT * FROM shoes WHERE id = ${id};
  `;
  return shoe;
}
