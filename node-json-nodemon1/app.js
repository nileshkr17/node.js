const http = require('http');

const routesNew = require('./routes');
const server = http.createServer(routesNew.handler);
console.log(routesNew.someText);


server.listen(3000);
