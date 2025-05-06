// var slugify = require('slugify')
// let a = slugify( 'some string')
// console.log(a);

// const http = require('node:http');
import http from "http"
const hostname = '127.0.0.1'
const port = 3000;
const server = http.createServer( (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end ('Hello World!');
});
server.listen(port , hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});



