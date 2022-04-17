// import { Client } from "pg";
const { Client } = require("pg");
const { NativeModules } = require("react-native-web");

const client = new Client({
  host: "mydbinstance.cgzpmtgx5ydq.us-east-1.rds.amazonaws.com",
  user: "postgres",
  password: "LifestyleAppDB",
  port: 5432,
  database: "LifestyleAppDB",
});

module.exports = client;
// // client.connect();

// // function getUsers() {
// //   // client.connect();
// //   client.query(`SELECT * FROM public."User"`, (err, res) => {
// //     if (!err) {
// //       console.log(res.rows);
// //     } else {
// //       console.log(err.message);
// //     }
// //     client.end;
// //   });
// // }

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
