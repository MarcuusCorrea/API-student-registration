import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "#####@", //coloque sua senha do banco
    database: "crud_estudantes" //coloque seu database
})
