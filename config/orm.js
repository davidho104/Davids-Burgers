var connection = require("../config/connection.js");

function questionMarks(number) {
    let array = [];
    for (let i = 0; i < number; i++) {
        array.push("?");
    }
    return array.toString();
}

function sqlObj(obj) {
    let array = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            array.push(key + "=" + obj[key]);
        }
    }
    return array.toString();
}

let orm = {
    selectAll: function (table, cb) {
        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (error, result) {
            if (error) throw error;
            cb(result);
        });
    },
    insertOne: function (table, col, val, cb) {
        let queryString = "INSERT INTO " + table + " " + col.toString() + "VALUES " + questionMarks(val.length) + ";";
        connection.query(queryString, val, function (error, result) {
            if (error) throw error;
            cb(result);
        });
    },
    updateOne: function (table, colVal, cond, cb) {
        let queryString = "UPDATE " + table + "SET " + sqlObj(colVal) + "WHERE " + cond + ";";
        connection.query(queryString, function (error, result) {
            if (error) throw error;
            cb(result);
        });
    }
};
module.exports = orm;