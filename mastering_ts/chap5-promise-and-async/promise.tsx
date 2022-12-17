import { rejects } from "assert"

function fnDelayedPromise(
  resolve: () => void,
  reject: () => void
) {
  function afterTimeout() {
    resolve()
  }
  
  setTimeout(afterTimeout, 1000)
}

function delayedResponsePromise(): Promise<void> {
  return new Promise<void>(fnDelayedPromise)
}

function delayedPromise(): Promise<void> {
  //return new Promise object
  return new Promise<void>( //start constructor
    (
      resolve: () => void,
      reject: () => void
    ) => {
      //start of function definition
      function afterTimeout() {
        resolve()
      }
      setTimeout(afterTimeout, 1000)
      //end of function definition
    }
  ) //end constructor
}

delayedPromise().then(() => {
  console.log('delayed promise returned')
})

function errorPromise(): Promise<void> {
  return new Promise<void> (( //constructor
    resolve: () => void,
    reject: () => void
  ) => {
    //function definition
    console.log('2 calling reject')
    reject()
  })
}

console.log('1 calling errorPromise()')
errorPromise().then(() => {}).catch(() => {
  console.log('3 caught an error')
})