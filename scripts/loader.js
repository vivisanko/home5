/**
 * Created by ALEX on 11.06.2017.
 */
(function () {
    "use strict"
    var output = document.querySelector('#output');
    makeRequest('GET','/sdbsgfi/afgt','json').then(function (data) {
        output.textContent = JSON.stringify(data,4,4);
    });

}());