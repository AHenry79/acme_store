const express = require("express");
const router = express.Router();
const { getAllUsers } = require("./db");

router.get("/", async (req, res, next) => {
  try {
    res.send(await getAllUsers());
  } catch (err) {
    next(err);
  }
});
module.exports = router;
