let array = ['123', '456', '789']
delete array[0]

for (let i = 0; i < array.length; i++) {
  checkAndPrintElement(array[i])
}

function checkAndPrintElement(arrElement: string | undefined) {
  if (arrElement === undefined) {
    console.log(`invalid element`)
  } else {
    console.log(`valid array element: ${arrElement}`)
  }
}

let a
let b = null
console.log(`a = ${a}`)
console.log(`b = ${b}`)

function printValues(a: number | null | undefined) {
  console.log(`a = ${a}`)
}

printValues(1)
printValues(null)
printValues(undefined)

/**
a = 1
a = null
a = undefined
*/