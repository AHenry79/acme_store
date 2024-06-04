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
const getSingleUserById = async (id) => {
  const response = await client.query(`SELECT * FROM users WHERE id = $1`, [
    id,
  ]);
  return response.rows[0];
};
const getFavoritesByUserId = async (params_id) => {
  const response = await client.query(`SELECT * FROM users WHERE id = $1`, [
    params_id,
  ]);
  const { id, username, password } = response.rows[0];
  const fav_response = await client.query(
    `SELECT * FROM favorites WHERE user_id = $1`,
    [params_id]
  );
  return {
    id,
    username,
    password,
    favorites: fav_response.rows,
  };
};

module.exports = {
  getAllUsers,
  getAllProducts,
  getAllFavorites,
  getSingleUserById,
  getFavoritesByUserId,
  client,
};
