interface IA {
  a: number
}

interface IAb {
  a: number
  b: string
}

interface IAbc {
  a: number
  b: string
  c: boolean
}

//conditional type
type abc_ab_a<T> =
  T extends IAbc ? [number, string, boolean] :
  T extends IAb ? [number, string] :
  T extends IA ? [number] :
  never

function getTupleStringAbc<T>(tupleValue: abc_ab_a<T>): string {
  let [...tupleDestructured] = tupleValue
  let returnString = '|'
  for (let value of tupleDestructured) {
    returnString += `${value}|`
  }

  return returnString
}

let keyA = getTupleStringAbc<IA>([1])
console.log(`keyA = ${keyA}`)

let keyAb = getTupleStringAbc<IAb>([1, 'test'])
console.log(`keyAb = ${keyAb}`)

let keyAbc = getTupleStringAbc<IAbc>([1, 'test', true])
console.log(`keyAbc = ${keyAbc}`)