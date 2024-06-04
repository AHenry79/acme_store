const express = require("express");
const app = express();
const { client } = require("../server/db");

app.use(express.json());
client.connect();

// app.use("/api/customers", require("./customer"));
// app.use("/api/restaurants", require("./restaurant"));
// app.use("/api/reservations", require("./reservation"));

app.listen(8080, () => {
  console.log("App is running at port 8080");
});
