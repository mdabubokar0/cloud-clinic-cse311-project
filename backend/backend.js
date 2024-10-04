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

app.listen(8081, () => {
    console.log("Listening")
})