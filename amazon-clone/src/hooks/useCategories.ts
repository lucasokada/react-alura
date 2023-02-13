import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

import { Category } from '../types/Category'

export const useCategories: () => { categories: Category[] } = () => {
  const [categories, setCategories] = useState<Category[]>([])
  
  const getCategories = useCallback(async () => {
    const {data} = await axios.get('http://localhost:3001/categories')
    setCategories(data)
  }, [])
  
  useEffect(() => {
    getCategories()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return {
    categories
  }
}