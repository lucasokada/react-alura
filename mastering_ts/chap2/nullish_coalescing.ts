function nullishCheck(a: number | undefined | null) {
  console.log(`a : ${a ?? `undefined or null`}`)
}

nullishCheck(1)         //a : 1
nullishCheck(null)      //a : undefined or null
nullishCheck(undefined) //a : undefined or null

var globalString!: string                       //opcao 1
setGlobalString('this string is set')
console.log(`global string = ${globalString!}`) //opcao 2

function setGlobalString(value: string) {
  globalString = value
}