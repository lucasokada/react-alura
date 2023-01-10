import { useSetRecoilState } from 'recoil'
import { obterId } from '../../../util'
import { IEvento } from '../../IEvento'
import { listaDeEventosState } from '../atom'

const useAdicionarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
  return (evento: IEvento) => {
    const hoje = new Date()
    if(evento.inicio < hoje) {
      throw new Error("Eventos não podem ser cadastrados com data menor que a atual")
    }
    evento.id = obterId()
    return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
  }
}

export default useAdicionarEvento