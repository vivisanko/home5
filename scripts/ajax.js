(function (){
    "use strict";

function makeRequest(method, url,type) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = type;
        xhr.open(method, url, true);
        xhr.addEventListener('error', reject);
        xhr.addEventListener('load', function () {
            resolve(xhr.response);
        });
        xhr.send();
    });
}
window.makeRequest = makeRequest;
}());
