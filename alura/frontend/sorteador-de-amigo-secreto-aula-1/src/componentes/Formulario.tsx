import React, { useRef, useState } from 'react'
import { useAdicionarParticipante } from '../state/hook/useAdicionarParticipante'
import { useMensagemErro } from '../state/hook/useMensagemErro'

const Formulario = () => {
    const [nome, setNome] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    
    const adicionar = useAdicionarParticipante()
    const mensagemErro = useMensagemErro()
    
    const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        adicionar(nome)
        setNome('')
        inputRef.current?.focus()
        
    }
    
    return (<form onSubmit={adicionarParticipante} > 
        <input 
            value={nome}
            placeholder="Insira os nomes dos participantes"
            type="text"
            onChange={event => setNome(event.target.value)}
            ref={inputRef}
        />
        <button disabled={!nome}>Adicionar</button>
        {mensagemErro && <p role='alert'>{mensagemErro}</p>}
    </form>)
}

export default Formulario