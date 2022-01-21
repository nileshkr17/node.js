const http = require('http');

const routesNew = require('./routes');
console.log(routesNew.someText)
const server = http.createServer(routesNew);

server.listen(3000);
