import { Item as TItem } from 'types/itens'
import styles from './Item.module.scss'
import {AiOutlineHeart, AiFillHeart, AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai'
import {FaCartPlus} from 'react-icons/fa'
import { mudarFavorito } from 'store/reducers/itens'
import { useDispatch } from 'react-redux'
import { mudarCarrinho, mudarQuantidade } from 'store/reducers/carrinho'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import classNames from 'classnames'

interface Props {
  item: TItem
  isCarrinho?: boolean
}

const iconProps = {
  size: 24,
  color: '#041833'
}

const quantidadeProps = {
  size: 32,
  color: '#1875E8'
}

const Item = ({ item, isCarrinho = false} : Props) => {
  const {
    titulo,
    descricao,
    foto,
    favorito,
    preco,
    id,
    quantidade
  } = item
  
  const dispatch = useDispatch()
  const estaNoCarrinho = useSelector<RootState, boolean>(state => state.carrinho.some(itemNoCarrinho => itemNoCarrinho.id === id))
  
  const resolverFavorito = () => {
    return dispatch(mudarFavorito(id))
  }
  
  const resolverCarrinho = () => {
    return dispatch(mudarCarrinho(id))
  }
  
  return (
    <div className={classNames(styles.item, {
      [styles.itemNoCarrinho]: isCarrinho
    })}>
      <div className={styles['item-imagem']}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles['item-descricao']}>
        <div className={styles['item-titulo']}>
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>
        <div className={styles['item-info']}>
          <div className={styles['item-preco']}>
            R$ {preco.toFixed(2)}
          </div>
          <div className={styles['item-acoes']}>
            {favorito 
              ? <AiFillHeart {...iconProps} color='#ff0000' className={styles['item-acao']} onClick={resolverFavorito}/>
              : <AiOutlineHeart {...iconProps} className={styles['item-acao']} onClick={resolverFavorito}/>
            }
            {
              isCarrinho 
              ? (
                <div className={styles.quantidade}>
                  Quantidade:
                  <AiFillMinusCircle {...quantidadeProps} onClick={() => {if(quantidade! > 0) dispatch(mudarQuantidade({id, quantidade: -1}))}}/>
                  <span>{String(quantidade ?? 0).padStart(2, '0')}</span>
                  <AiFillPlusCircle {...quantidadeProps} onClick={() => dispatch(mudarQuantidade({id, quantidade: 1}))}/>
                </div>
              )
              : <FaCartPlus 
                  {...iconProps} 
                  color={estaNoCarrinho ? '#1875E8' : iconProps.color} 
                  className={styles['item-acao']} 
                  onClick={resolverCarrinho} 
                />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item