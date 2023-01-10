import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import {useListaParticipantes} from '../state/hook/useListaParticipantes';
import { Rodape } from './Rodape';

jest.mock('../state/hook/useListaParticipantes', () => {
  return {
    useListaParticipantes: jest.fn()
  }
})

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavegacao
  }
})

const mockSorteio = jest.fn()
jest.mock('../state/hook/useSorteador.ts', () => {
  return {
    useSorteador: () => mockSorteio
  }
})

describe('onde não existem participantes suficioentes', () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([])
  })
  
  test('A brincadeira não pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )
    
    const botao = screen.getByRole('button')
    expect(botao).toBeDisabled()
  })
})

describe('onde existem participantes sufucientes', () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(['Ana', 'Catarina', 'Josefina'])
  })
  
  test('brincadeira pode ser iniciada', () => {    
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )
    
    const botao = screen.getByRole('button')
    expect(botao).not.toBeDisabled()
  })
  
  test('brincadeira iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )
    
    const botao = screen.getByRole('button')
    fireEvent.click(botao)
    expect(mockNavegacao).toBeCalled()
    expect(mockNavegacao).toBeCalledWith('/sorteio')
    expect(mockSorteio).toBeCalledTimes(1)
  })
})