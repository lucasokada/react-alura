type ExcludeStringAndNumber = Exclude<
  string | number | boolean,
  string | number>

let boolValue: ExcludeStringAndNumber = true

type StringOrNumber = Extract<
  string | boolean | never,
  string | number>

let stringValue: StringOrNumber = 'test'

type NotNullOrUndef = NonNullable<number | undefined | null>
let numValue: NotNullOrUndef = 1