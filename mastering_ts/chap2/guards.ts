/* Guard */

//erro de compilacao
/*
function addWithUnion(
  arg1: string | number,
  arg2: string | number
) {
  return arg1 + arg2
}
*/

// function addWithTypeGuard(
//   arg1: string | number,
//   arg2: string | number
// ) {
//   if (typeof arg1 === 'string') {
//     console.log(`arg1 is of type string`)
//     return arg1 + arg2
//   }

//   if (typeof arg1 === 'number' && typeof arg2 === 'number') {
//     console.log(`arg1 and arg2 are numbers`)
//     return arg1 + arg2
//   }

//   console.log(`default return threat both as strings`)
//   return arg1.toString() + arg2.toString()
// }

// /* Type aliases */

// type StringOrNumber = string | number

// function addWithTypeAliases(
//   arg1: StringOrNumber,
//   arg2: StringOrNumber
// ) {
//   return arg1.toString() + arg2.toString()
// }

// /* Enum */
const enum DoorStateString {
  OPEN = 'open',
  CLOSED = 'closed',
  UNESPECIFIED = 'unespecified'
}

function checkDoorState(state: DoorStateString) {
  console.log(`enum value is : ${state}`)
  switch (state) {
    case DoorStateString.OPEN:
      console.log(`Door is open`)
      break
    case DoorStateString.CLOSED:
      console.log(`Door is closed`)
      break
  }
}

checkDoorState(DoorStateString.CLOSED)
checkDoorState(DoorStateString.OPEN)