interface IConnection {
  server: string
  port: number
}

interface IError {
  code: number
  message: string
}

interface IDateRow {
  id: number
  name: string
  surname: string
}

function complexPromise(connection: IConnection, accessKey: string): Promise<IDateRow[]> {
  return new Promise<IDateRow[]>(
  (
    resolve: (results: IDateRow[]) => void,
    reject: (results: IError) => void
  ) => {
    //check the connection properties
    //connect to the database
    //retrieve data, or reject with an error
  })
}

complexPromise({
  server: 'test',
  port: 4200
}, 'abcd').then((rows: IDateRow[]) => {
  //do something with rows
}).catch((error: IError) => {
  //do something with error
})