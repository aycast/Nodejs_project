//request - response

//server  = http


var http = require("http");
var fs = require("fs");

var server = http.createServer((req,res) =>{
   
    if(req.url == "/"){
        fs.readFile("index.html", (err, html) => {
            res.write(html);
            res.end();
        });
    }
    else if(req.url =="/diziler") {
        fs.readFile("diziler.html", (err,html) => {
            res.write(html);
            res.end();
        });
    }
    else{
        fs.readFile("404.html", (err,html) => {
            res.write(html);
            res.end();
        });
    }
});

server.listen(3000, () => {
    console.log("server port 3000 de çalışacak");
} );