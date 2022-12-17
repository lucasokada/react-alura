"use strict";
exports.__esModule = true;
var fs = require("fs");
fs.readFile('./test1.txt', function (err, data) {
    if (err) {
        console.log("an error occured: ".concat(err));
    }
    else {
        console.log("test1.txt contents: ".concat(data));
        fs.readFile('./test2.txt', function (err, data) {
            if (err) {
                console.log("an error occured : ".concat(err));
            }
            else {
                console.log("test2.txt contents: ".concat(data));
                fs.readFile('./test3.txt', function (err, data) {
                    if (err) {
                        console.log("an error occurred: ".concat(err));
                    }
                    else {
                        console.log("test3.txt contents: ".concat(data));
                    }
                });
            }
        });
    }
});
fs.promises.readFile('./test1.txt').
    then(function (value) {
    console.log("ps test1.txt read: ".concat(value));
    return fs.promises.readFile('./test2.txt');
}).then(function (value) {
    console.log("ps test2.txt read: ".concat(value));
    return fs.promises.readFile('test3.txt');
}).then(function (value) {
    console.log("ps test3.txt read: ".concat(value));
})["catch"](function (error) {
    console.log("an error occurred: ".concat(error));
});
