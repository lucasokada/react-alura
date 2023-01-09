import React, { useState } from 'react'
import styled from 'styled-components'

interface Opcao {
  id: number
  titulo: string
  corpo: string
  rodape: string
}

interface Props {
  opcoes: Array<Opcao>
  defaultValue?: Opcao | null
  onChange?: (opcao: Opcao) => void
}

const Section = styled.section<{selecionado: boolean}> `
  width: 194px;
  height: 88px;
  background: ${(props) => props.selecionado ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#FFFFFF'};
  border: 1px solid;
  border-color: ${(props) => props.selecionado ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#EB9B00'};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
  font-family: sans-serif;
  header {
    color: ${(props) => props.selecionado ? '#FFFFFF' : '#EB9B00'};
    font-size: 12px;
  }
  strong {
    color: ${(props) => props.selecionado ? '#FFFFFF' : '#EB9B00'};
    font-size: 16px;
    font-weight: 700;
  }
  footer {
    color: ${(props) => props.selecionado ? '#FFFFFF' : 'rgba(0, 0, 0, 0.54)'};
    font-weight: 400;
    font-size: 12px;
  }
`

export const AbGrupoOpcoes = ({ opcoes, onChange, defaultValue }: Props) => {
  const [selecao, setSelecao] = useState<Opcao | null>(defaultValue ?? null)
  
  const selectOption = (opcao: Opcao) => {
    setSelecao(opcao)
    if(onChange) {
      onChange(opcao)
    }
  }
  
  return (
    <>
      {opcoes.map((opcao: Opcao) => (
        <Section 
          key={opcao.id} 
          selecionado={selecao?.id === opcao.id} 
          onClick={() => selectOption(opcao) }
        >
        <header>
          {opcao.titulo}
        </header>
        <div>
          <strong>{opcao.corpo}</strong>
        </div>
        <footer>
          {opcao.rodape}
        </footer>
      </Section>
      ))}
    </>
  )
}

<Section selecionado={false}>
<header>
  E-book
</header>
<div>
  <strong>R$ 00,00</strong>
</div>
<footer>
  .pdf, .epub, .mob
</footer>
</Section>