/**
 * Created by timothysmith on 2016-05-05.
 */
var lorem = require('lorem-ipsum');

var home = function(request, response) {
    if (request.url == "/") {
        if (request.method.toLocaleLowerCase() === 'get') {
            response.write("Hello Worldlier!");
            
            response.end();
        }
    }
};


module.exports.home = home;