"use strict";
exports.__esModule = true;
function promiseReturningString(thrownError) {
    return new Promise(function (resolve, reject) {
        if (thrownError) {
            reject(101);
        }
        resolve('resolve with message');
    });
}
console.log('1. calling promiseReturningString');
promiseReturningString(true).then(function (returnValue) {
    console.log('this is not called');
})["catch"](function (errorCode) {
    console.log("2 caught ".concat(errorCode));
});
