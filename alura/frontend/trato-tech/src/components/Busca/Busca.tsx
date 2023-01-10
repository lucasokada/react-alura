import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { RootState } from 'store'
import { mudarBusca, resetarBusca } from 'store/reducers/busca'
import styles from './Busca.module.scss'

const Busca = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const busca = useSelector<RootState, string>(state => state.busca)
  
  useEffect(() => {
    dispatch(resetarBusca())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])
  
  return ( 
    <div className={styles.busca}>
      <input 
        className={styles.input} 
        placeholder="o que você procura?"
        value={busca}
        onChange={evento => dispatch(mudarBusca(evento.target.value))}
      />
    </div>
  )
}

export default Busca