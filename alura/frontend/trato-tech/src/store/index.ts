import {combineReducers, configureStore} from '@reduxjs/toolkit'
import categorias from 'store/reducers/categorias'
import itens from 'store/reducers/itens'
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'
import carrinho from './reducers/carrinho'
import busca from './reducers/busca'

//adicionado. Resolve erro no dispatch das actions externas
export type AppDispatch = typeof store.dispatch;

//redux persist
const persistConfig = {
  key: 'root',
  storage
}

//redux persist
const reducers = combineReducers({
  categorias: categorias, 
  itens: itens,
  carrinho: carrinho,
  busca: busca
})
const persistedReducer = persistReducer(persistConfig, reducers)

//antes de redux persist
// const store = configureStore({
  // reducer: {
    // categorias: categoriasSlice,
    // itens: itensSlice
  // }
// })

const store = configureStore({
  reducer: persistedReducer,
})


export default store
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>