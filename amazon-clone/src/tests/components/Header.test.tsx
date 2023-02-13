import { fireEvent, render, screen } from '@testing-library/react'
import Header from 'components/Header'
import { useCategories } from 'hooks/useCategories'
import { useUsers } from 'hooks/useUsers'
import React from 'react'

const mockAxiosGet = jest.fn()
jest.mock('axios', () => {
  return {
    get: () => mockAxiosGet
  }
})

jest.mock('hooks/useCategories', () => {
  return {
    useCategories: jest.fn()
  }
})

jest.mock('hooks/useUsers.ts', () => {
  return {
    useUsers: jest.fn()
  }
})

// const setStateMock = jest.fn()
// const useStateMock: any = (useState: any) => [useState, setStateMock]
// jest.spyOn(React, 'useState').mockImplementation(useStateMock)

describe('Header component', () => {
  beforeEach(() => {
    (useCategories as jest.Mock).mockReturnValue({
      categories: [
        {
          name: "Todas as ofertas"
        },
        {
          name: "Dispositivos Amazon e Acessórios"
        },
        {
          name: "Alimentos e Bebidas"
        }
      ]
    });
    
    (useUsers as jest.Mock).mockReturnValue({
      user: {
        login: 'lucas.okada2000@gmail.com',
        password: 'leiki',
        name: 'Lucas Eiki Okada',
        city: 'Matão',
        cep: '15991278'
      }
    })
  })
  test('render header buttons', () => {
    const {getAllByRole} = render(<Header />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const buttons = getAllByRole('button')
    expect(buttons.length).toBe(18)
  })
  
  test('adrress info button have only first name in upperCase', () => {
    const {getAllByRole} = render(<Header />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const buttons = getAllByRole('button')
    expect(buttons[1].textContent).not.toContain('Eiki Okada')
    expect(buttons[1].textContent).toEqual('Enviar para LUCASMatão 15991278')
  })
  
  test('shopping cart button must have cart itens quantity', () => {
    const {getAllByRole, baseElement} = render(<Header />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    let buttons = getAllByRole('button')
    expect(buttons[5]).toHaveTextContent('5')
    
  })
  
  test('modal must open and close', () => {
    const {getAllByRole, baseElement} = render(<Header />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    let buttons = getAllByRole('button')
    fireEvent.click(buttons[6])
    // eslint-disable-next-line testing-library/prefer-screen-queries
    buttons = getAllByRole('button')
    expect(baseElement.childNodes[0]).toHaveTextContent('Destaques')
    const closeButton = buttons.find(button => button.textContent === 'X')
    if(closeButton) {
      fireEvent.click(closeButton)
    }
    expect(baseElement.childNodes[0]).not.toHaveTextContent('Destaques')
  })
})