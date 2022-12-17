type AllowedStringValues = 'one' | 'two' | 'three'
type AllowedNumericValues = 1 | 2 | 4433

function withLiteral(input: AllowedNumericValues | AllowedStringValues) {
  console.log(`called with: ${input}`)
}

withLiteral('one')
withLiteral('two')
withLiteral('three')
withLiteral(4433)
withLiteral('four') //Argument of type '"four"' is not assignable to parameter of type 'AllowedStringValues | AllowedNumericValues'.
withLiteral(4)      //Argument of type '4' is not assignable to parameter of type 'AllowedNumericValues | AllowedStringValues'.