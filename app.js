const http = require('http');

const routesNew = require('./routes');
const server = http.createServer(routesNew);

server.listen(3000);
