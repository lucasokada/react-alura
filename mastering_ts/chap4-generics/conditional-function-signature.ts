type inferredFromFnParam<T> = T extends (a: infer U) => void ? U : never
function testInferredFromFnFunction<T>(arg: inferredFromFnParam<T>) { }

testInferredFromFnFunction<(a: number) => void>(1)
testInferredFromFnFunction<(a: string) => void>('test')

type inferredFromFnReturnType<T> = T extends (a: string) => infer U ? U : never
function testInferredFromReturnType<T>(arg: inferredFromFnReturnType<T>) { }

testInferredFromReturnType<(a: string) => number>(1)
testInferredFromReturnType<(a: string) => boolean>(false)
