import Header from 'components/Header/Header'
import styles from './Carrinho.module.scss'
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from 'store'
import Item from 'components/Item/Item'
import { Item as TItem } from 'types/itens'
import { resetarCarrinho } from 'store/reducers/carrinho'
import Button from 'components/Button'

interface SelectorResult {
  carrinho: TItem[]
  total: number
}

const Carrinho = () => {
  const dispatch = useDispatch()
  const {carrinho, total} = useSelector<RootState, SelectorResult>(state => {
    const regexp = new RegExp(state.busca, 'i')
    let total = 0
    const carrinho = state.carrinho.reduce((itens, itemNoCarrinho) => {
      const item = state.itens.find(item => item.id === itemNoCarrinho.id)
      total += item!.preco * itemNoCarrinho.quantidade
      if(item?.titulo.match(regexp)) {
        item && itens.push({
          ...item,
          quantidade: itemNoCarrinho.quantidade
        })
      }
      
      return itens
    }, [] as TItem[])
    return {carrinho, total}
  })
  
  
  return (
    <div>
      <Header
        titulo='Carrinho de compras'
        descricao='Confira produtos que você adicionou ao carrinho.'
      />
      <div className={styles.carrinho}>
        {carrinho.map(item => <Item key={item.id} item={item} isCarrinho />)}
        <div className={styles.total}>
          <strong>
            Resumo da compra
          </strong>
          <span>
            SubTotal: <strong>R$ {total.toFixed(2)}</strong>
          </span>
          <Button
            onClick={() => dispatch(resetarCarrinho()) }
          >
            Finalizar Compra
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Carrinho