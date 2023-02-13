import { renderHook } from '@testing-library/react'
import { useUsers } from 'hooks/useUsers'

const mockAxiosGet = jest.fn()
jest.mock('axios', () => {
  return {
    get: () => mockAxiosGet
  }
})

jest.mock('hooks/useUsers', () => {
  return {
    useUsers: jest.fn()
  }
})


describe('useUsers hook', () => {
  beforeEach(() => {
    (useUsers as jest.Mock).mockReturnValue({
      user: [
        {
          name: 'teste'
        }
      ]
    })
  })
  
  test('recover a existent user', () => {
    const {result} = renderHook(() => useUsers('teste@gmail.com', 'passTeste'))
    expect(result.current.user).not.toBe(undefined)
  })
})