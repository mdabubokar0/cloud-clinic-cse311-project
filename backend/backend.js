import express from "express";
import mysql from "mysql2";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sccdb",
});

app.post("/register", (req, res) => {
  const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.phone_no,
    req.body.gender,
    req.body.specialization,
    req.body.address,
    req.body.password,
  ];

  const sql = "INSERT INTO user_details (`first_name`, `last_name`, `email`, `phone_no`, `gender`, `specialization`, `address`, `password`) VALUES(?)";

  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const values = [req.body.user_id, req.body.password];

  const sql = "SELECT * FROM user_details WHERE user_id = ? AND password = ?";
  db.query(sql, [values], (err, data) => {
    if (err) return res.json("Login failed");
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});
