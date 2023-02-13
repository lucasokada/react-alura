import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { User } from 'types/User'

export const useUsers = (login: string, password: string) => {
  const [user, setUser] = useState<User>({} as User)
  
  const makeRequest = async () => {
    return await axios.get('http://localhost:3001/userInfo')
  }
  
  useEffect(() => {
    const response = makeRequest()
    console.log(response)
    response.then((resp) => {
      const users: User[] = resp.data
      console.log(users)
      const retrivedUser = users.find(user => login === user.login && password === user.password) ?? {} as User
      setUser(retrivedUser)
      console.log(retrivedUser)
      console.log(user)
    })
  }, [login, password])
  
  return {user}
}