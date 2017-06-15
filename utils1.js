/**
 * Created by ALEX on 13.06.2017.
 */
'use strict'
module.exports = {
    getValidFileName(request){

        return new Promise(function (resolve, reject) {
            var url = request.url,
                metod = request.metod,
                data = [],
                body;
            if (url === '/') {
                url = '/index.html';
            }
            var fileName = path.normalize(process.cwd() + url);
            fs.stat(fileName, function (err, stat) {
                if (!err) {
                    resolve(fileName)
                }
                else reject();
            });
        });
    }
}
