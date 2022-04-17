// import { Client } from "pg";
const Pool = require("pg").Pool;

const pool = new Pool({
  host: "mydbinstance.cgzpmtgx5ydq.us-east-1.rds.amazonaws.com",
  user: "postgres",
  password: "LifestyleAppDB",
  port: 5432,
  database: "LifestyleAppDB",
});

module.exports = pool;

// const getLogins = () => {
//   client.connect();
//   return new Promise(function (resolve, reject) {
//     client.query(`SELECT * FROM public."Login"`, (error, results) => {
//       if (error) {
//         reject(error);
//       }
//       resolve(results.rows);
//     });
//     client.end();
//   });
// };

// const insertLogin = (body) => {
//   client.connect();
//   return new Promise(function (resolve, reject) {
//     const { userName, email, password } = body;
//     client.query(
//       `INSERT INTO public."Login"("userName", email, password) VALUES ($1, $2, $3) RETURNING *`,
//       [userName, email, password],
//       (error, results) => {
//         if (error) {
//           reject(error);
//         }
//         resolve(
//           `A new user has been added to the Database: ${results.rows[0]}`
//         );
//       }
//     );
//     client.end();
//   });
// };

// module.exports = {
//   getLogins,
//   insertLogin,
// };

// // client.connect();

// const getUsers = () => {
//   client.query(`SELECT * FROM public."User"`, (err, res) => {
//     if (!err) {
//       console.log(res.rows);
//     } else {
//       console.log(err.message);
//     }
//     client.end;
//   });
// };

// client.connect();

// //Run queries one at a time
// client.query(`SELECT * FROM public."User"`, (err, res) => {
//   if (!err) {
//     console.log(res.rows);
//   } else {
//     console.log(err.message);
//   }
//   client.end;
// });

// // export { client, getUsers };
// module.exports = client;
