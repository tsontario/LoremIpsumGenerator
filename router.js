/**
 * Created by timothysmith on 2016-05-05.
 */
var lorem = require('lorem-ipsum');
var fs = require('fs');
var url = require('url');

var home = function(request, response) {
    if (request.url == "/") {
        response.write("Hello World");
        response.write(arguments.toString());
        response.end();
    }
};

// TODO Routing call not working
var result = function(request, response) {
    if (request.url.match("result")) {
        response.writeHead(200, {"Content-type": 'text/html'});
        console.log("Writing");
        for (var key in request) {
            console.log(key);
            
        }
        var page = fs.readFile('views/result.html');
        response.write(page);
        response.end();
    }
};


module.exports.home = home;
module.exports.result = result;