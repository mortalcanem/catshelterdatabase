const http = require('http');
const { listenerCount } = require('process');
const port = 3000;

http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.write('Hello JS World!');
    res.end();

}).listen(port);