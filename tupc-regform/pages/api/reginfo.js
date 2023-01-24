
const mysql = require("mysql2")

export default async function handler(req, res) {
    //TODO
    if (req.method === "POST") {
        const { firstName, lastName, email, phoneNum, address, isOldStudent, reason} = req?.body;

        console.log("Req Payload: ", req.body);

        const fullName = firstName + ' ' + lastName

        const dbconnection = mysql.createConnection({
            host: "localhost" ,
            database: "crudtest",
            user: "root",
            password: "root",
        });
        const sqlInsert = `INSERT INTO registrationinfo (fullName, email, phoneNum, address, isOldStudent, reason) VALUES (?, ?, ?, ?, ?, ?)`;
        dbconnection.query(sqlInsert, [fullName, email , phoneNum, address, isOldStudent, reason], (err) => {
                            console.log('Error: ', err);});
                            return res.end();
}}