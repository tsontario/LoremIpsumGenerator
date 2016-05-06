/**
 * Created by timothysmith on 2016-05-05.
 */
var lorem = require('lorem-ipsum');
var fs = require('fs');
var url = require('url');
var renderer = require('./renderer');

var htmlContent = {'Content-type' : 'text/html'};

var home = function(request, response) {
    if (request.url == "/") {
        var homeViews = ['header', 'form', 'footer'];
        response.writeHead(200, htmlContent);
        renderer.rend(homeViews, response);
        response.end();
    }
};

// TODO Routing form response



module.exports.home = home;
//TODO NOT IMPLEMENTED module.exports.result = result;