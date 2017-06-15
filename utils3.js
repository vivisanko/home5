/**
 * Created by ALEX on 11.06.2017.
 */
'use strict'
module.exports = {
    getRequestData(request){
        var data = [];
        return new Promise(function (resolve) {
            request.on('data', function (datum) {
                data.push(datum);
            });
            request.on('end', function () {
                resolve(Buffer.concat(data).toString());
            });
        });
    }
}