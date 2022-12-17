let complexObject = {
  aNum: 1,
  bStr: 'name',
  cBool: true
}

let { aNum: objId, bStr: objName, cBool: isValid } = complexObject
console.log(`objId = ${objId}`)
console.log(`objName = ${objName}`)
console.log(`isValid = ${isValid}`)