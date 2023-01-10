import { useNavigate } from 'react-router-dom'
import {useListaParticipantes} from '../state/hook/useListaParticipantes'
import { useSorteador } from '../state/hook/useSorteador'

export const Rodape = () => {
  const participantes = useListaParticipantes()
  const navigate = useNavigate()
  const sortear = useSorteador()
  
  const handleClickButton = () => {
    sortear()
    navigate('/sorteio')
  }
  
  return (
    <footer>
      <button
        disabled={participantes.length < 3}
        onClick={handleClickButton}
      >
        Iniciar Brincadeira
      </button>
    </footer>
  )
}