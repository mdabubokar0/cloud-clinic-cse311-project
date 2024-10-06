import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sccdb"
})

app.get("/", (req, res) => {
    res.json("Dash")
})

app.get("/doctors", (req, res) => {
    const q = "SELECT * FROM doctor_details";
    db.query(q, (err, data) => {
        if(err) return res.json("Error")
        return res.json(data)
    })
})

app.listen(8081, () => {
    console.log("Listening")
})