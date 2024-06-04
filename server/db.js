const pg = require("pg");

const client = new pg.Client("postgres://localhost/acme_planner");

const getAllUsers = async () => {
  const response = await client.query(`SELECT * FROM customer ORDER BY id ASC`);
  return response.rows;
};
const getAllProducts = async () => {
  const response = await client.query(
    `SELECT * FROM reservation ORDER BY id ASC`
  );
  return response.rows;
};
const getUserFavorites = async () => {};

module.exports = { getAllUsers, getAllProducts };
