import React from 'react'
import styled, { css } from 'styled-components'

export interface Props {
  texto?: string
  tipo?: 'primario' | 'secundario'
  onClick?: () => void
}


const Botao = styled.button<Props> `
  background: ${(props: Props) => props.tipo === 'primario' ? '#EB9B00' : '#FFFFFF' };
  padding: 16px 32px;
  border: 2px solid #EB9B00;
  color: ${(props: Props) => props.tipo === 'primario' ? '#FFFF' : '#EB9B00' };
  font-size: 20px;
  cursor: pointer;
  ${(props: Props) => props.tipo === 'primario' 
    ? css`
      &:hover {
        background: #B87900;
        border: 2px solid #B87900;
      }
  `
    : css`
      &:hover {
        background: #FFFF;
        border: 2px solid #B87900;
        color: #B87900;
      }
  `
  };
`

const AbBotao = ({ texto, tipo = 'primario', onClick }: Props) => {
  return (
    <Botao onClick={onClick} tipo={tipo} texto={texto} >
      Clique aqui!
    </Botao>
  )
}

export {AbBotao}