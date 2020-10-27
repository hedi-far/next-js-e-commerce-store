# Next.js E-Commerce-Store

## Description

This e-commerce-store is called "The Random Shoe Outlet" and was created with Next.js. It has:

- a start page,
- a page with all avalaible items,
- a page for each single item with a description and price
- a shopping bag page where the amount of each item can be changed and/ or the item can be deleted,
- a checkout page with a validated form,
- a thank-you page,
- a shopping bag icon displaying the number of items in it.

![start page](/screenshot_home.jpg)
![shopping bag](/screenshot_shopping_bag.jpg)
![check out page](/screenshot_checkout.jpg)

## Technologies used

- Next.js
- Postgres.js
- Ley
- dotenv
- Emotion/core
- js-cookie
- Next-cookies
- Jest
- Cypress.io
- GitHub Actions
- Photos from unsplash.com

## Database Setup

Copy the `.env.example` file to a new file called `.env` (ignored from Git) and fill in the necessary information.

Follow the instructions from the PostgreSQL step in [UpLeveled's System Setup Instructions](https://github.com/upleveled/system-setup/blob/master/readme.md).

Then, connect to the built-in `postgres` database as administrator in order to create the database:

**Windows**

If it asks for a password, use `postgres`.

```sh
psql -U postgres
```

**macOS**

```sh
psql postgres
```

Once you have connected, run the following to create the database:

```sql
CREATE DATABASE <database name>;
CREATE USER <user name> WITH ENCRYPTED PASSWORD '<user password>';
GRANT ALL PRIVILEGES ON DATABASE <database name> TO <user name>;
```

Then, to connect to the database using this new user, quit `psql` and reconnect:

```sh
\q
psql -U <user name> <database name>
```

### Running the migrations

To set up the structure and the content of the database, run the migrations using Ley:

```sh
yarn migrate up
```

To reverse the last single migration, run:

```sh
yarn migrate down
```

### Start application /

- 1st terminal: `postgres` (start dbms)
- 2nd terminal: `psql -U <user name> <database name>` (work with database, enter new data etc.)
- 3rd terminal: `yarn start` (start web app on localhost:3000)

## Heroku

[Find the project on Heroku](https://the-random-shoe-outlet.herokuapp.com/)
