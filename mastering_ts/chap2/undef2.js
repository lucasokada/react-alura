var array = ['123', '456', '789'];
delete array[0];
for (var i = 0; i < array.length; i++) {
    checkAndPrintElement(array[i]);
}
function checkAndPrintElement(arrElement) {
    if (arrElement === undefined) {
        console.log("invalid element");
    }
    else {
        console.log("valid array element: ".concat(arrElement));
    }
}
var a;
var b = null;
console.log("a = ".concat(a));
console.log("b = ".concat(b));
function printValues(a) {
    console.log("a = ".concat(a));
}
printValues(1);
printValues(null);
printValues(undefined);
