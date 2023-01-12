import Header from 'components/Header/Header'
import styles from './Home.module.scss'
import relogio from 'assets/inicial.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { TCategoria } from 'types/categoria'
import { AppDispatch, RootState } from 'store'
import Button from 'components/Button'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { buscarCategorias, resetCategorias } from 'store/reducers/categorias'
import {buscarItens} from 'store/reducers/itens'
import { resetItems } from 'store/reducers/itens'

const Home = () => {
  const navigate = useNavigate()
  const categorias = useSelector<RootState, TCategoria[]>(state => state.categorias)
  const dispatch = useDispatch<AppDispatch>()
  
  // useEffect(() => {
  //   dispatch(resetCategorias())
  //   dispatch(resetItems())
  // })
  
  useEffect(() => {
    dispatch(buscarCategorias())
    dispatch(buscarItens())
  }, [dispatch])
  
  return (
    <div>
      <Header 
        titulo='Classificados Tech' 
        descricao='Compre diversos tipos de produtos no melhor site do Brasil!'
        classname={styles.header}
        imagem={relogio}
      >
        <Button onClick={() => navigate('/anuncie')}>
          Quer anunciar
        </Button>
      </Header>
      <div className={styles.categorias}>
        <div className={styles['categorias-title']}>
          <h1>
            Categorias
          </h1>
        </div>
        <div className={styles['categorias-container']}>
          {categorias.map((categoria, index) => (
            <div key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h1>{categoria.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home