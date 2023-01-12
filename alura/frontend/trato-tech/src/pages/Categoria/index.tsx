import Button from 'components/Button'
import Header from 'components/Header/Header'
import Item from 'components/Item/Item'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { RootState } from 'store'
import { TCategoria } from 'types/categoria'
import { Item as TItem } from 'types/itens'
import styles from './Categoria.module.scss'

interface SelectorReturn {
  categoria: TCategoria | undefined,
  itens: TItem[]
}

const Categoria = () => {
  const navigate = useNavigate()
  const {nomeCategoria} = useParams()
  const {categoria, itens} = useSelector<RootState, SelectorReturn>(state => {
    const regexp = new RegExp(state.busca, 'i')
    return {
      categoria: state.categorias.find(categoria => categoria.id === nomeCategoria) || {} as TCategoria,
      itens: state.itens.filter(item => item.categoria === nomeCategoria && item.titulo.match(regexp))
    }
  })
  
  return (
    <div>
      <Header titulo={categoria ? categoria.nome: ''} descricao={categoria ? categoria.descricao: ''} imagem={categoria ? categoria.header: ''}>
        {/* <Button onClick={() => navigate(`/anuncie/${nomeCategoria}`)}>
          Quero anunciar
        </Button> */}
      </Header>
      <div className={styles.itens}>
        {itens?.map(item => {
          return (
            <Item item={item} />
          )
        })}
      </div>
    </div>
  )
}

export default Categoria