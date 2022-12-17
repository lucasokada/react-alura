function alwaysThrows(): number | never {
  throw new Error('this will always throw')
  return -1
}

enum AnEnum {
  FIRST,
  SECOND
}

function getEnumValue(enumValue: AnEnum): string {
  switch (enumValue) {
    case AnEnum.FIRST: return 'first case'
    case AnEnum.SECOND: return 'second case'
  }

  let returnValue: never = enumValue
  return returnValue
}