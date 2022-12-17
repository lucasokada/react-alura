export function delayedPromise(): Promise<void> {
  return new Promise<void>((resolve: () => void, reject: () => void) => {
    setTimeout(() => {
      console.log('2. calling resolve()')
      resolve()
    }, 1000)
  })
}

async function callDelayedPromise() {
  console.log('1. before calling delayedPromise')
  await delayedPromise()
  console.log('3. after calling delayedPromise')
}

callDelayedPromise()

function errorPromise(): Promise<string> {
  return new Promise<string>((
    resolve: (result: string) => void,
    reject: (error: string) => void
  ) => {
    setTimeout(() => {
      console.log('2. calling reject()')
      reject('promise rejected')
    }, 1000)
  })
}

async function callErrorPromise() {
  try {
    console.log('1. calling errorPromise()')
    await errorPromise()
  } catch (error) {
    console.log(`3 await threw: ${error}`)
  }
}

callErrorPromise()



function promiseWithValues(): Promise<string[]> {
  return new Promise<string[]>(
    (
      resolve: (values: string[]) => void,
      reject: (error: string) => void
    ) => {
      resolve(['first', 'second'])
    }
  )
}

async function getValuesFromPromise() {
  let values = await promiseWithValues()
  for (let value of values) {
    console.log(`value : ${value}`)
  }
}

getValuesFromPromise()

/*
value : first
value : second
*/

function usingCallbacks() {
  function afterCallbackSuccess() {
    //execute when the callback succeeds
  }

  function afterCallbackFailure() {
    //execute when the callback fails
  }

  //call a function and provide both callbacks
  invokeAsync(afterCallbackSuccess, afterCallbackFailure)
  //code here does not wait for callback to execute
}

function usingPromises() {
  delayedPromise().then(
    () => {
      //execute on success
    }
  ).catch (
    () => {
      //execute on error
    }
  )
  //code here does not wait for promise to return
}

async function usingAsync() {
  try {
    await delayedPromise()
    //continue to next line on error
  } catch(error) {
    //execute on error
  }
  
  //code here waits for async call to complete
}