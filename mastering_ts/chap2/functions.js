function concatValues(a, b) {
    console.log("a + b = ".concat(a + b));
}
concatValues('first', 'second');
concatValues('third');
function concatWithDefault(a, b) {
    if (b === void 0) { b = 'default'; }
    console.log("a + b = ".concat(a + b));
}
concatWithDefault('first', 'second');
concatWithDefault('third');
function testArgumentsTypeScript() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i in args) {
        console.log("args[".concat(i, "] = ").concat(args[i]));
    }
}
testArgumentsTypeScript('1');
testArgumentsTypeScript(10, 20);
