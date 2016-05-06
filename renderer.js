/**
 * Created by timothysmith on 2016-05-05.
 */
var fs = require('fs');


/* Pass optional arguments function for key-value pairs for templating custom content */
var rend = function(templateNames, response) {
    var data = "";
    
    for (var i=0; i<templateNames.length; i++) {
        var fileContents = fs.readFileSync("views/" + templateNames[i] + ".html").toString();
        response.write(fileContents);
    }
    
};



module.exports.rend = rend;