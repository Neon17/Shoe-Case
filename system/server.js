const http = require('http');
var database = require('./database');
const fs = require('node:fs');

var data = fs.readFileSync('../data.json','utf-8');
var cart = fs.readFileSync('./views/cart.html','utf-8');
var shoes = fs.readFileSync('./views/shoes.html','utf-8');
var welcome = fs.readFileSync('./views/welcome.html','utf-8');
var datatable = fs.readFileSync('./views/datatable.html','utf-8');


let server = http.createServer((req,resp)=>{
    if ((req.method=='POST')&&(req.url == '/')){
        resp.statusCode = 200;
        resp.setHeader('Content-Type','text/html');
        resp.write("Post Requests");
        resp.end();
    }
    else if (((req.method=='GET')&&(req.url == '/'))){
        let sql = "SELECT * from customers";
        let results;
        database.connection.query(sql, function(err,result){
            if (err) throw err;
            results = JSON.stringify(result);
            // console.log(results);
            fs.writeFileSync('../data.json',results, err=>{
                if (err) console.log(err);
                console.log('Success Writing JSON file');
            })
        });
        // console.log(data);
        if (data!=""){
            console.log(data);
            console.log('not null');
            data = JSON.parse(data);
            var content = null, tempcontent = null;
            content = data.map((dat)=>{
                tempcontent += `
                <tr>
                    <td>${dat.name}</td>
                    <td>${dat.address}</td>
                </tr>`;
                return tempcontent;
            })
        }
        resp.setHeader('Content-Type','text/html');
        resp.end(welcome.replace('{{%TableContent%}}',content));
    }
    else if (req.url == '/dashboard'){
        resp.statusCode = 200;
        resp.setHeader('Content-Type','text/html');
        resp.write('Dashboard Page');
        resp.end();
    }
    else if (req.url == '/shoes'){
        resp.statusCode = 200;
        resp.setHeader('Content-Type','text/html');
        resp.write(fs.readFileSync('./views/shoes.html'));
        resp.end();
    }

    else if (req.url == '/navbar.html'){
        resp.statusCode = 200;
        resp.setHeader('Content-Type','text/html');
        resp.write(fs.readFileSync('./templates/navbar.html'));
        resp.end();
    }

    // below is the way to post data into the server and fetch data using JS
    // else if (req.url == '/data.json'){
    //     resp.write(fs.readFileSync('../data.json'));
    //     resp.end();
    // }

    else if (req.url == '/data.json'){
        
    }
    else if (req.url == '/nikeshoes.jpg'){
        resp.setHeader('Content-Type','image/jpeg')
        resp.write(fs.readFileSync('./images/website/nikeshoes.jpg'));
        resp.end();
    }
    else if (req.url == '/jordanshoes.jpg'){
        resp.setHeader('Content-Type','image/jpeg')
        resp.write(fs.readFileSync('./images/website/jordanshoes.jpg'));
        resp.end();
    }
    else if (req.url == '/test'){
        resp.setHeader('Content-Type','text/html');
        resp.write(fs.readFileSync('./views/test.html'));
        resp.end();
    }
    else {
        resp.statusCode = 404;
        resp.setHeader('content-Type','text/plain');
        resp.end('Page not found.');
    }
});

let port = 3000;
server.listen((port),()=>{
    console.log(`Listening on http://localhost:${port}`);
})

server.on('connection',function(){
    console.log("New Connection");
});

// console.log("Localhost Connection: "+database.conn);
// console.log("Database Connection in server: "+database.connection);

