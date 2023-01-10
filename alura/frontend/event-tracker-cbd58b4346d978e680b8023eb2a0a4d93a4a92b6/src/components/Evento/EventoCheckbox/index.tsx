import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IEvento } from '../../../interfaces/IEvento';
import { listaDeEventosState } from '../../../interfaces/state/atom';
import useAtualizarEvento from '../../../interfaces/state/hooks/useAtualizarEvento';

const EventoCheckbox: React.FC<{ evento: IEvento}> = ({ evento }) => {
  
  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]
  
  const atualizarEvento = useAtualizarEvento()
  const setListaDeEventos = useSetRecoilState(listaDeEventosState)
  
  const alterarStatus = () => {
    const eventoAlterado = {
      ...evento
    }
    eventoAlterado.completo = !evento.completo
    atualizarEvento(eventoAlterado)
  }

  return (<i className={estilos.join(' ')} onClick={alterarStatus}></i>)
}

export default EventoCheckbox