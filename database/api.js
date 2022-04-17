const client = require("./connection");
const express = require("express");
const app = express();

app.listen(3300, () => {
  console.log("Sever is now listening to port 3300");
});

client.connect();

app.get("/users", (req, res) => {
  client.query(`SELECT * FROM public."User"`, (err, res) => {
    if (!err) {
      console.log(res.rows);
    } else {
      console.log(err.message);
    }
    client.end;
  });
});

client.connect();
