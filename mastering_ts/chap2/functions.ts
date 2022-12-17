function concatValues(a: string, b?: string) {
  console.log(`a + b = ${a + b}`)
}

concatValues('first', 'second')
concatValues('third')

function concatWithDefault(a: string, b: string = 'default') {
  console.log(`a + b = ${a + b}`)
}

concatWithDefault('first', 'second')
concatWithDefault('third')

function testArgumentsTypeScript(...args: string[] | number[]) {
  for (let i in args) {
    console.log(`args[${i}] = ${args[i]}`)
  }
}

testArgumentsTypeScript('1')
testArgumentsTypeScript(10, 20)
/*
args[0] = 1
args[0] = 10
args[1] = 20
*/

function myCallbackTS(text: string): void {
  console.log(`my callback with ${text}`)
}

function withCallbackArgTS(
  message: string,
  callbackFn: (text: string) => void
) {
  console.log(`withcallback called, message: ${message}`)
  callbackFn(`${message} from withCallbak`)
}

function add(a: string, b: string): string
function add(a: number, b: number): number
function add(a: any, b: any) {
  return a + b
}

add('first', 'second')
add(1, 2)