let tuple1: [string, boolean]
tuple1 = ['test', true]

console.log(`tuple[0] = ${tuple1[0]}`) //tuple[0] = test
console.log(`tuple[1] = ${tuple1[1]}`) //tuple[1] = true

let [tupleString, tupleBoolean] = tuple1
console.log(`tupleString = ${tupleString}`) //tupleString = test
console.log(`tupleBoolean = ${tupleBoolean}`) //tupleBoolean = true

let tupleOptional: [string, boolean?]
tupleOptional = ['test', true]
tupleOptional = ['test']
console.log(`tupleOptional[0] = ${tupleOptional[0]}`) //tuple[0] = test
console.log(`tupleOptional[1] = ${tupleOptional[1]}`) //tuple[1] = undefined
