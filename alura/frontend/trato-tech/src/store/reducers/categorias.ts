import { createStandaloneToast } from '@chakra-ui/toast';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import categoriasService from 'services/categorias';
import { TCategoria } from 'types/categoria';
import { resetarCarrinho } from './carrinho';

const {toast} = createStandaloneToast()

const initialState: Array<TCategoria> = []

export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
  categoriasService.buscar
)

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    adicionarCategorias: (state, {payload}) => {
      if(state.length === 0) state.push(...payload)
    },
    
    resetCategorias: () => {
      return initialState
    }
  },
  extraReducers: builder => {
    builder
      .addCase(
        buscarCategorias.fulfilled,
        (state, {payload}) => {
          if(state.length === 0) {
            state.push(...payload)
            toast({
              title: 'Sucesso!',
              description: 'Categorias carregadas com sucesso!',
              duration: 2000,
              isClosable: true,
              status: 'success'
            })
          }
        }
      )
      .addCase(
        buscarCategorias.pending,
        (state, {payload}) => {
          toast({
            title: 'Carregando!',
            description: 'Carregando categorias!',
            duration: 2000,
            isClosable: true,
            status: 'loading'
          })
        }
      )
      .addCase(
        buscarCategorias.rejected,
        (state, {payload}) => {
          toast({
            title: 'Erro!',
            description: 'Erro na busca de categorias!',
            duration: 2000,
            isClosable: true,
            status: 'error'
          })
        }
      )
      .addCase(
        resetarCarrinho.type,
        () => {
          toast({
            title: 'Sucesso!',
            description: 'Compra feita com sucesso!',
            duration: 2000,
            isClosable: true,
            status: 'success'
          })
        }
      )
  }
})

export const {adicionarCategorias, resetCategorias} = categoriasSlice.actions
export default categoriasSlice.reducer