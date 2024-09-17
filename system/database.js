//we should connect database and create table if necessary here
const mysql = require('mysql2');

var mysql_connect = {
    host: "localhost",
    user: "root",
    password: "mysqli1234",
    insecureAuth : true,
    port: "3306",
    database: "",
};

try{
    var conn = mysql.createConnection(mysql_connect);
    
    var connection;
    conn.query('CREATE DATABASE IF NOT EXISTS ShoeCase');
    
    
    mysql_connect.database = "ShoeCase";
    connection = mysql.createConnection(mysql_connect);

    //lets' create required tables if it didn't existed
}
catch(error){
    console.log(error);
}

module.exports.connection = connection;
module.exports.conn = conn;

//for loop is given below to make connect synchronous and to provide exported connection variable with some
// for (i=0;i<1;i++){
//     conn.connect(function(err){
//         if (err) throw err;
//         console.log('connected');
//         conn.query('CREATE DATABASE IF NOT EXISTS ShoeCase',function(err,result){
//             if (err) throw err;
//             console.log("Created a new database..");
//             mysql_connect.database = "ShoeCase";
//             connection = mysql.createConnection(mysql_connect);
//             connection.connect(function(err){
//                 if (err) throw err;
//                 console.log("connected to database..");
//             });
//         });
//     });
// }