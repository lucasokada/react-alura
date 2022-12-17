let firstObj: object = { id: 1, name: 'first obj' }
let secondObj: object = { ...firstObj }
console.log(`second obj : ${JSON.stringify(secondObj)}`) //second obj : {"id":1,"name":"first obj"}

let nameObj: object = {
  name: 'nameObj name',
}

let idObj: object = {
  id: 1
}

let obj3: object = {
  ...nameObj, ...idObj
}

console.log(`obj3 = ${JSON.stringify(obj3)}`) //obj3 = {"name":"nameObj name","id":1}


let objPrec1: object = {
  id: 3, name: 'obj1 name'
}

let objPrec2: object = {
  id: 1001, desc: 'obj2 description'
}

let objPrec3: object = {
  ...objPrec1, ...objPrec2
}

console.log(`obj3 = ${JSON.stringify(objPrec3, null, 4)}`)
// obj3 = {
//   "id": 1001,
//   "name": "obj1 name",
//   "desc": "obj2 description"
// }

let firstArray = [1, 2, 3]
let secondArray = [3, 4, 5]
let thirdArray = [...firstArray, ...secondArray]
console.log(`third array = ${thirdArray}`) //third array = 1,2,3,3,4,5

function append(array: number[], value: number) {
  return [...array, value]
}

let arr: number[] = []
arr = append(arr, 5)
arr = append(arr, 7)
arr = append(arr, 2)
arr = append(arr, 8)
console.log(arr)