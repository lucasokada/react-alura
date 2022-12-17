let structuredObject: object = {
  name: 'myObject',
  properties: {
    id: 1,
    type: 'anObject'
  }
}

function printObjectType(a: object) {
  console.log(`a ${JSON.stringify(a)}`)
}

//unknown

//usando any:
let a: any = 'test'
let aNumber: number = 2
aNumber = a

//usando unknown
let u: unknown = 'an unknown'
u = 1
let aNumber2: number
aNumber2 = u  //Type 'unknown' is not assignable to type 'number'