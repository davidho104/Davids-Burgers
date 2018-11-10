var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "theman",
        database: "burgers_db"
    });
}
connection.connect(function (error) {
    if (error) {
        console.error("Error connection: " + error.stack);
        return;
    }
    console.log("Connected as ID " + connection.threadId);
});
module.exports = connection;