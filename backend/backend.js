import express from "express";
import mysql from "mysql2";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
app.use(cors());

const JWT_SECRET = "secret-cloud-jwt-clinic-1234";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db",
});

app.post("/register", (req, res) => {
  const values = [
    req.body.hos_name,
    req.body.email,
    req.body.hos_no,
    req.body.hos_address,
    req.body.password,
  ];

  const sql =
    "INSERT INTO user_details (`hos_name`, `email`, `hos_no`, `hos_address`, `password`) VALUES(?)";

  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM user_details WHERE email = ?';

  db.query(sql, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = results[0];

    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Assuming 'role' is part of the user object
    const token = jwt.sign({ userId: user.user_id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

    // Send the token and role to the frontend
    return res.status(200).json({
      message: 'Login successful',
      token,
      role: user.role // Sending role in the response
    });
  });
});


// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ error: "No token provided" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });

    req.user = user; // Attach user info to request
    next();
  });
};

// Get logged-in user's role
app.get("/api/user/role", authenticateToken, (req, res) => {
  const { userId } = req.user; // Extract user ID from JWT

  const query = `SELECT role FROM user_details WHERE user_id = ?`;

  db.query(query, [userId], (err, result) => {
    if (err) return res.status(500).json({ error: "Database query error" });

    if (result.length > 0) {
      return res.json({ role: result[0].role });
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});
