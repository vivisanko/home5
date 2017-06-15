/**
 * Created by ALEX on 13.06.2017.
 */
'use strict'
module.exports = {
    getSendExistingFile(fileName,response){
        return new Promise(function (resolve) {
                fs.readFile(fileName, function (err, file) {
                    if (err) {
                        response.writeHead(500);

                    } else {
                        response.writeHead(200);
                        response.write(file.toString());

                    }
                    response.end();
                    resolve();
                });

            }
        );


    }
}
