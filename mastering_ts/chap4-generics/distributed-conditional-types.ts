type dateOrNumberOrString<T> =
  T extends Date ? Date :
  T extends number ? Date | number :
  T extends string ? Date | number | string :
  never

function compareValues<T extends string | number | Date | boolean>(
  input: T,
  compareTo: dateOrNumberOrString<T>
) {
  //faz comparacao
}

compareValues(new Date(), new Date())
compareValues(1, new Date())
compareValues(1, 2)
compareValues('test', new Date())
compareValues('test', 1)
compareValues('test', 'test')