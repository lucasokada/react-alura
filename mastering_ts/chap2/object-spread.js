var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var firstObj = { id: 1, name: 'first obj' };
var secondObj = __assign({}, firstObj);
console.log("second obj : ".concat(JSON.stringify(secondObj))); //second obj : {"id":1,"name":"first obj"}
var nameObj = {
    name: 'nameObj name'
};
var idObj = {
    id: 1
};
var obj3 = __assign(__assign({}, nameObj), idObj);
console.log("obj3 = ".concat(JSON.stringify(obj3))); //obj3 = {"name":"nameObj name","id":1}
var objPrec1 = {
    id: 3, name: 'obj1 name'
};
var objPrec2 = {
    id: 1001, desc: 'obj2 description'
};
var objPrec3 = __assign(__assign({}, objPrec1), objPrec2);
console.log("obj3 = ".concat(JSON.stringify(objPrec3, null, 4)));
// obj3 = {
//   "id": 1001,
//   "name": "obj1 name",
//   "desc": "obj2 description"
// }
var firstArray = [1, 2, 3];
var secondArray = [3, 4, 5];
var thirdArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true);
console.log("third array = ".concat(thirdArray)); //third array = 1,2,3,3,4,5
function append(array, value) {
    return __spreadArray(__spreadArray([], array, true), [value], false);
}
var arr = [];
arr = append(arr, 5);
arr = append(arr, 7);
arr = append(arr, 2);
arr = append(arr, 8);
console.log(arr);
