/**
 * Created by timothysmith on 2016-05-05.
 */
var lorem = require('lorem-ipsum');
var fs = require('fs');
var url = require('url');
var renderer = require('./renderer');
var query = require('querystring');


var htmlContent = {'Content-type' : 'text/html'};


function generateLorem(query) {
    var result = '';
    result += "<div class='lorem'>";
    result += lorem({
        units: query["organize_by"],
        count: query["number_of"],
        format: "html"
    });
    result += "</div>";
    return result;
}

var home = function(request, response) {
    if (request.url == "/") {

        response.on('error', function(err) {
            console.log("error! " + err);
        });

        var homeViews = ['header', 'form', 'footer'];
        response.writeHead(200, htmlContent);
        renderer.rend(homeViews, response);
        response.end();
    }
};

var result = function(request, response) {
    
    if (request.url.match(/result.html/)) {
        response.writeHead(200);
        var body = "";
        request.on('data', function(chunk) {
            body += chunk;
        }).on('end', function() {
            renderer.rend(['header'], response);
            var query = (url.parse(request.url, true).query);
            response.write(generateLorem(query));
            response.write(body);
            renderer.rend(['footer'], response);
            response.end();
        }).on('error', function(error) {
            console.log(error);
        });
        
    }
};

// TODO Routing form response



module.exports.home = home;
module.exports.result = result;