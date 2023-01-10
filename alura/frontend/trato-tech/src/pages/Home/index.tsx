import Header from 'components/Header/Header'
import styles from './Home.module.scss'
import relogio from 'assets/inicial.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { TCategoria } from 'types/categoria'
import { RootState } from 'store'

const Home = () => {
  const navigate = useNavigate()
  const categorias = useSelector<RootState, TCategoria[]>(state => state.categorias)
  
  return (
    <div>
      <Header 
        titulo='Classificados Tech' 
        descricao='Compre diversos tipos de produtos no melhor site do Brasil!'
        classname={styles.header}
        imagem={relogio}
      />
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