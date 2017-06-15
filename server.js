/**
 * Created by ALEX on 11.06.2017.
 */

"use strict";
const PORT = 80;
var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    utils1 = require('./utils1'),
    utils2 = require('./utils2'),
    utils3 = require('./utils3');


var server = http.createServer();
server.on('request', function (request, response) {
    utils1.getValidFileName(request)
        .then((fileName) => utils2.getSendExistingFile(fileName, response),
            () => function () {
                utils3.getRequestData(request).then(function (body) {
                    var msg = JSON.stringify({
                        url,
                        metod,
                        body
                    });
                    response.writeHead(200);
                    response.write(msg);
                    response.end();
                });
            }
        )

})


server.on('error', function (err) {
    console.log(err);
});

server.listen(PORT, function () {
    console.log(`Server is running on http://localhost:${PORT}`);
})