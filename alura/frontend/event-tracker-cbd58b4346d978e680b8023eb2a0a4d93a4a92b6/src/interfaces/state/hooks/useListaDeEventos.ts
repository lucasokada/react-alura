import { useRecoilValue } from 'recoil'
import { IEvento } from '../../IEvento'
import { eventosFiltradosState } from '../seletores'

const useListaDeEventos = () => {
  return useRecoilValue(eventosFiltradosState)
}

export default useListaDeEventos