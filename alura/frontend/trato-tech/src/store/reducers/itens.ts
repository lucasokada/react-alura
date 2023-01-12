import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid';
import { Item } from 'types/itens';
import itensService from 'services/itens';

const initialState: Item[] = [];

export const buscarItens = createAsyncThunk(
  'itens/buscar',
  itensService.buscar
)

const itensSlice = createSlice({
  name: 'itens',
  initialState,
  reducers: {
    mudarFavorito: (state, params) => {
      state = state.map(item => {
        if(item.id === params.payload) item.favorito = !item.favorito
        return item
      })
    },
    
    cadastrarItem: (state, params) => {
      state.push({...params.payload, id: uuid()})
    },
    
    resetItems: () => {
      return initialState
    },
    
    mudarItem: (state, params) => {
      //forma 1
      // return state.map(item => {
      //   if(item.id === params.payload.id) item = {...item, ...params.payload.item}
      //   return item
      // })
      
      //forma 2
      // state.map(item => {
      //   if(item.id === params.payload.id) Object.assign(item, params.payload.item)
      //   return item
      // })
      
      const index = state.findIndex(item => item.id === params.payload.id)
      Object.assign(state[index], params.payload.novoItem)
    },
    
    deletarItem: (state, params) => {
      // let index = state.findIndex(item => item.id === params.payload.id)
      // let newState = [...state.slice(0, index - 1), ...state.slice(index + 1, state.length - 1)]
      // return newState
      
      const index = state.findIndex(item => item.id === params.payload.id)
      state.splice(index, 1)
    },
    
    adicionarItens: (state, {payload}) => {
      if(state.length === 0) state.push(...payload)
    } 
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        buscarItens.fulfilled,
        (state, {payload}) => {
          if(state.length === 0) state.push(...payload)
        }
      )
      .addCase(
        buscarItens.pending,
        (state, {payload}) => {
          console.log('carregando itens')
        }
      )
      .addCase(
        buscarItens.rejected,
        (state, {payload}) => {
          console.log('busca de itens rejeitada')
        }
      )
  },
})

export const {mudarFavorito, cadastrarItem, resetItems, mudarItem, deletarItem, adicionarItens} = itensSlice.actions
export default itensSlice.reducer