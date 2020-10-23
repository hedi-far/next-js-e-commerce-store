import postgres from 'postgres';
import dotenv from 'dotenv';
import setPostgresDefaultsOnHeroku from './setPostgresDefaultsOnHeroku';

//as suggested in deployment cheatsheet
setPostgresDefaultsOnHeroku();

//connection to database is established
dotenv.config();

//changed as suggested in the cheatsheet
// from: const sql = postgres(); to:
const sql =
  process.env.NODE_ENV === 'production'
    ? // Heroku needs SSL connections but
      // has an "unauthorized" certificate
      // https://devcenter.heroku.com/changelog-items/852
      postgres({ ssl: { rejectUnauthorized: false } })
    : postgres();

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
