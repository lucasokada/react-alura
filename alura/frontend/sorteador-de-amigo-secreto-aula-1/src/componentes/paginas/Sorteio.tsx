import React, { useState } from 'react'
import {useListaParticipantes} from '../../state/hook/useListaParticipantes'
import {useResultadoSorteio} from '../../state/hook/useResultadoSorteio'

export const Sorteio = () => {
  const [participanteDaVez, setParticipanteDaVez] = useState('')
  const [amigoSecreto, setAmigoSecreto] = useState('')
  const participantes = useListaParticipantes()
  const resultadoAmigoSecreto = useResultadoSorteio()
  
  const sortear = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(resultadoAmigoSecreto.has(participanteDaVez)) { 
      setAmigoSecreto(resultadoAmigoSecreto.get(participanteDaVez)!)
    }
  }
  
  return (
    <section>
      <form onSubmit={sortear}>
        <select 
          required 
          name='participanteDavez' 
          id="participanteDaVez"
          placeholder='Selecione o seu nome'
          value={participanteDaVez}
          onChange={evento => setParticipanteDaVez(evento.target.value)}
        >
          <option>Selecione seu nome</option>
          {
            participantes.map((participante: string) => <option key={participante}>{participante}</option>)
          }
        </select>
        <button>Sortear</button>
      </form>
      {amigoSecreto && <p role='alert'>{amigoSecreto}</p>}
    </section>
  )
}