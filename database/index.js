const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./connection");
// const login_model = require("./connection");

app.use(cors());
app.use(express.json());

//Insert into Login
app.post("/insertLogin", async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const insertLogin = await pool.query(
      `INSERT INTO public."Login"("userName", email, password) VALUES ($1, $2, $3) RETURNING *`,
      [userName, email, password]
    );
    res.json(insertLogin.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//Get All From Login Table
app.get("/getLogins", async (req, res) => {
  try {
    const getLogins = await pool.query(`SELECT * FROM public."Login"`);
    res.json(getLogins.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//Get Login by id
app.get("/getLogins/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const loginByID = await pool.query(
      `SELECT * FROM public."Login" WHERE "login_id" = $1`,
      [id]
    );
    res.json(loginByID.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//Update Login by id
//30:13 IN PERN STACK COURSE YOUTUBE VIDEO
app.put("/getLogins/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, email, password } = req.body;
    const updateLoginByID = await pool.query(
      `UPDATE public."Login" SET "userName" = $2, email = $3, password = $4 WHERE "login_id" = $1`,
      [id, userName, email, password]
    );
    res.json(`Login was update for Username: ${userName}`);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(3000, () => {
  console.log("Server is now listening to port 3000");
});

// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "https://localhost:3300");
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Access-Control-Allow-Headers"
//   );
//   next();
// });

// app.get("/", (req, res) => {
//   login_model
//     .getLogins()
//     .then((response) => {
//       res.status(200).send(response);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// });

// app.post("/insertLogin", (req, res) => {
//   login_model
//     .insertLogin(req.body)
//     .then((response) => {
//       res.status(200).send(response);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// });

// pool.connect();

// app.get("/users", (req, res) => {
//   pool.query(`SELECT * FROM public."User"`, (err, result) => {
//     if (!err) {
//       console.log(result.rows);
//       res.send(result.rows);
//     } else {
//       console.log(err.message);
//     }
//     pool.end;
//   });
// });
