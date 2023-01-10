import { createSlice } from '@reduxjs/toolkit'
import { ItemCarrinho } from 'types/itemCarrinho'

const initialState: ItemCarrinho[] = []

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    mudarCarrinho: (state, params) => {
      const temItem = state.some(item => item.id === params.payload)
      if(!temItem) {
        return [...state, {id: params.payload, quantidade: 1}]
      }
      return state.filter(item => item.id !== params.payload)
    },
    
    mudarQuantidade: (state, params) => {
      state = state.map(itemNoCarrinho => {
        console.log('em state = ', itemNoCarrinho.quantidade)
        if(itemNoCarrinho.id === params.payload.id) {
          itemNoCarrinho.quantidade += params.payload.quantidade
        }
        return itemNoCarrinho
      })
    },
    
    resetarCarrinho: () => initialState
  }
})

export const {mudarCarrinho, mudarQuantidade, resetarCarrinho} = carrinhoSlice.actions
export default carrinhoSlice.reducer