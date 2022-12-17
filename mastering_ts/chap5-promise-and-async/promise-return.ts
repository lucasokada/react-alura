import { rejects } from "assert"
import { resolve } from "path"

function promiseReturningString(thrownError: boolean): Promise<string> {
  return new Promise<string>(
    (
      resolve: (outputValue: string) => void,
      reject: (errorCode: number) => void
    ) => {
      if (thrownError) {
        reject(101)
      }
      resolve('resolve with message')
    }
  )
}

console.log('1. calling promiseReturningString')
promiseReturningString(true).then((returnValue: string) => {
  console.log('this is not called')
}).catch((errorCode: string) => {
  console.log(`2 caught ${errorCode}`)
})