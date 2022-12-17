function testArguments() {
  for(var i = 0; i < arguments.length; i++) {
    console.log('argument [" + i "] = ' + arguments[i])
  }
}

testArguments(1, 2)
testArguments('first', 'second', 'third')

/*
argument [" + i "] = 1
argument [" + i "] = 2
argument [" + i "] = first
argument [" + i "] = second
argument [" + i "] = third
*/

var myCallback = function(text) {
  console.log('myCallback called with ' + text)
}

function withCallbackArg(message, callbackFn) {
  console.log('withCallback called, message: ' + message)
  callbackFn(message + 'from withCallback')
}

withCallbackArg('initial text', myCallback)