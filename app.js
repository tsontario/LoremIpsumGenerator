var http = require('http');
var router = require('./router');

var server = http.createServer(function(request, response) {
    
    router.home(request, response);
});

server.listen(3000);