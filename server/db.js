const pg = require("pg");

const client = new pg.Client("postgres://localhost/acme_store");

const getAllUsers = async () => {
  const response = await client.query(`SELECT * FROM users ORDER BY id ASC`);
  return response.rows;
};
const getAllProducts = async () => {
  const response = await client.query(`SELECT * FROM products ORDER BY id ASC`);
  return response.rows;
};
const getAllFavorites = async () => {
  const response = await client.query(
    `SELECT * FROM favorites ORDER BY id ASC`
  );
  return response.rows;
};
const getUserFavorites = async () => {};

module.exports = { getAllUsers, getAllProducts, getAllFavorites, client };
