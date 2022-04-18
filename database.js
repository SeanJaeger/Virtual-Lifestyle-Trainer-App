const { Client } = require("pg");

const client = new Client({
  host: "mydbinstance.cgzpmtgx5ydq.us-east-1.rds.amazonaws.com",
  user: "postgres",
  password: "LifestyleAppDB",
  port: 5432,
  database: "LifestyleAppDB",
});

client.connect();

//SELECT user_id, "firstName", "lastName", birthday, gender, login_id FROM public."User";
client.query(`SELECT * FROM public."User"`, (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }

  client.end;
});

// client.query(
//   `INSERT INTO public."Login"("userName", email, password) VALUES ('SeanJaeger', 'seanjaeg@gmail.com', 'password')`,
//   (err, res) => {
//     if (!err) {
//       console.log(res.rows);
//     } else {
//       console.log(err.message);
//     }

//     client.end;
//   }
// );

// client.query(
//   `INSERT INTO public."User"("firstName", "lastName", birthday, gender, login_id) VALUES ('Sean', 'Jaeger', '1999-08-25', 'Male', (SELECT login_id FROM public."Login" WHERE "userName" = 'SeanJaeger'))`,
//   (err, res) => {
//     if (!err) {
//       console.log(res.rows);
//     } else {
//       console.log(err.message);
//     }

//     client.end;
//   }
// );