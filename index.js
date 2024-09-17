const server = require('./system/server');
const database = require('./system/database');


// createTable();
// async function createTable(){
//     var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//       connection.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table created");
//     });
// }
// createTable();
// function createTable(){
//     var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//       database.connection.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table created");
//     });
// }


// const EventEmitter = require('node:events');
// let Event = new EventEmitter();

// const os = require('node:os');
// let totalmem = os.totalmem;
// let freemem= os.freemem;
// console.log(`Total Memory = ${totalmem}`);
// console.log(`Free Memory = ${freemem}`);
// global.console.log("Hello World!");

// console.log(__filename);
// const fs = require('node:fs');

// Event.emit('message-sent');

// Event.on('message-sent',function(){
//     console.log('Listener Called!');
// });

// Event.emit('message-sent');

// const http = require('node:http');
// const server = http.createServer((req,resp)=>{
//     if (req.url === '/'){
//         resp.statusCode = 200;
//         resp.setHeader('Content-Type','text/html');
//         resp.write(fs.readFileSync(`${__dirname}/templates/index.html`));
//         resp.end();
//     }
// });

// server.listen(3000);

// server.on('connection', function(){
//     console.log('New Connection');
// });
