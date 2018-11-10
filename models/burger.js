var orm = require("../config/orm.js");

let burger = {
    selectAll: function(callback){
        orm.selectAll("burgers",function(result){
            callback(result);
        });
    }, insertOne: function(col,val,callback){
        orm.insertOne("burgers",col,val,function(result){
            callback(result);
        });
    },
    updateOne: function(colVal, cond, callback){
        orm.updateOne("burgers", colVal, cond, function(result){
            callback(result);
        });
    }
};

module.exports = burger;