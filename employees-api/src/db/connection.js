const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_URL,
    user: "sanji",
    password: "sanji",
    database: "employees",
    port: 3306
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = db;
