// required dependencies are declared as constants
// recommended change from vscode-> import { createServer } from 'http';
const http = require('http');


// web server constants
const hostname = '172.17.0.2';
const port = 3000;

// declare server object
// https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener 
// http.createServer([options][, requestListener])
// no options specified so signature is request listener
// req listener was defined as anon function with req and res arguments. 
const server = http.createServer(
    (req, res) => {
        res.statusCode = 200; // error code. 
        res.setHeader('Content-Type', 'text/plain'); // Declare content type
        res.end('Ello Werld'); // web page served. here, just a static string
    }
);

// https://nodejs.org/api/http.html#serverlisten
// server.listen([port[, host[, backlog]]][, callback]) from the 
// net.server library, which is super to http library. 
// not using the backlog part. anon function for callback. 
server.listen(port, hostname, 
    () => { 
        console.log(`Server running: http://${hostname}:${port}/`);  
        // backticks instead of single quotes. must be for variable substitution?
    }
);
