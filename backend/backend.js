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
  database: "db",
});

app.post("/register", (req, res) => {
  const values = [
    req.body.hos_name,
    req.body.hos_email,
    req.body.hos_no,
    req.body.hos_address,
    req.body.hos_password,
  ];

  const sql = "INSERT INTO hospital (`hos_name`, `hos_email`, `hos_no`, `hos_address`, `hos_password`) VALUES(?)";

  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const { hos_email, hos_password } = req.body;

  const sql = "SELECT * FROM hospital WHERE hos_email = ?";

  db.query(sql, [hos_email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = results[0];

    if (user.hos_password !== hos_password) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
     
    return res.status(200).json({ message: "Login successful", user });
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});
