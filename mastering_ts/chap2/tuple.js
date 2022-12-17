var tuple1;
tuple1 = ['test', true];
console.log("tuple[0] = ".concat(tuple1[0])); //tuple[0] = test
console.log("tuple[1] = ".concat(tuple1[1])); //tuple[1] = true
var tupleString = tuple1[0], tupleBoolean = tuple1[1];
console.log("tupleString = ".concat(tupleString)); //tupleString = test
console.log("tupleBoolean = ".concat(tupleBoolean)); //tupleBoolean = true
var tupleOptional;
tupleOptional = ['test', true];
tupleOptional = ['test'];
console.log("tupleOptional[0] = ".concat(tupleOptional[0])); //tuple[0] = test
console.log("tupleOptional[1] = ".concat(tupleOptional[1])); //tuple[1] = true
