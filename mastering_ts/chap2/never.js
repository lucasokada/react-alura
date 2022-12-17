function alwaysThrows() {
    throw new Error('this will always throw');
    return -1;
}
var AnEnum;
(function (AnEnum) {
    AnEnum[AnEnum["FIRST"] = 0] = "FIRST";
    AnEnum[AnEnum["SECOND"] = 1] = "SECOND";
})(AnEnum || (AnEnum = {}));
function getEnumValue(enumValue) {
    switch (enumValue) {
        case AnEnum.FIRST: return 'first case';
    }
    var returnValue = enumValue;
    return returnValue;
}
