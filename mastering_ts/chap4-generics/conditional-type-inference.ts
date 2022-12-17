type inferFromPropertyType<T> = T extends { id: infer U } ? U : never

function testInferFromPropertyType<T>(arg: inferFromPropertyType<T>) { }

testInferFromPropertyType<{ id: string }>('test')
testInferFromPropertyType<{ id: number }>(1)