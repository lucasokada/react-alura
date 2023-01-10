import shuffle from 'just-shuffle'
import { useSetRecoilState } from 'recoil'
import { resultadoAmigoSecreto } from '../atom'
import { useListaParticipantes } from './useListaParticipantes'

export const useSorteador = () => {
  const participantes = useListaParticipantes()
  const setResultado = useSetRecoilState(resultadoAmigoSecreto)
  
  return () => {
    const totalParticipantes = participantes.length
    const embaralhado = shuffle(participantes)
    const resultado = new Map<string, string>()
    
    for(let i = 0; i < totalParticipantes; i++) {
      const indiceAmigo = i === totalParticipantes - 1 ? 0 : i + 1
      resultado.set(embaralhado[i], embaralhado[indiceAmigo])
    }
    
    setResultado(resultado)
  }
}