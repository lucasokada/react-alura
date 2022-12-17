"use strict";
exports.__esModule = true;
function fnDelayedPromise(resolve, reject) {
    function afterTimeout() {
        resolve();
    }
    setTimeout(afterTimeout, 1000);
}
function delayedResponsePromise() {
    return new Promise(fnDelayedPromise);
}
function delayedPromise() {
    //return new Promise object
    return new Promise(//start constructor
    function (resolve, reject) {
        //start of function definition
        function afterTimeout() {
            resolve();
        }
        setTimeout(afterTimeout, 1000);
        //end of function definition
    }); //end constructor
}
delayedPromise().then(function () {
    console.log('delayed promise returned');
});
function errorPromise() {
    return new Promise(function (//constructor
    resolve, reject) {
        //function definition
        console.log('2 calling reject');
        reject();
    });
}
console.log('1 calling errorPromise()');
errorPromise().then(function () { })["catch"](function () {
    console.log('3 caught an error');
});
