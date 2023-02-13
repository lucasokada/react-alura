import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { useCategories } from '../../hooks/useCategories'

const mockAxiosGet = jest.fn()
jest.mock('axios', () => {
  return {
    get: () => mockAxiosGet
  }
})

jest.mock('../../hooks/useCategories', () => {
  return {
    useCategories: jest.fn()
  }
})

describe('useCategories hook', () => {
  beforeEach(() => {
    (useCategories as jest.Mock).mockReturnValue({
      categories: [
        {
          name: 'teste'
        }
      ]
    })
  })
  
  test('returns a list of Categories', async () => {
    const {result} = renderHook(useCategories)
    expect(result.current.categories.length).toBeGreaterThan(0)
    expect(result.current.categories[0].name).toBe('teste')
  })
})