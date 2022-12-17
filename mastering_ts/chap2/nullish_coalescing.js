function nullishCheck(a) {
    console.log("a : ".concat(a !== null && a !== void 0 ? a : "undefined or null"));
}
nullishCheck(1); //a : 1
nullishCheck(null); //a : undefined or null
nullishCheck(undefined); //a : undefined or null
var globalString;
setGlobalString('this string is set');
console.log("global string = ".concat(globalString));
function setGlobalString(value) {
    gobalString = value;
}
