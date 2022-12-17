type NumberOrString<T> = T extends number ? number : string

function logNumberOrString<T>(input: NumberOrString<T>) {
  console.log(`logNumberOrString : ${input}`)
}

logNumberOrString<number>(1)
logNumberOrString<string>('teste')
logNumberOrString<boolean>('boolean does not extend number')
logNumberOrString<boolean>(true) //error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string'.