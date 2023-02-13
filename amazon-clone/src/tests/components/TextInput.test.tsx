import TextInput from '../../components/TextInput'
import { fireEvent, render, screen } from '@testing-library/react'
import { useCategories } from '../../hooks/useCategories'

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

describe('TestInput component', () => {
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
    })
  })
  
  it('renders input', () => {
    const {getByTitle} = render(<TextInput />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const input = getByTitle('input-text')
    expect(input).toBeInTheDocument()
  })
  
  it('renders select input', () => {
    const {getAllByRole} = render(<TextInput />)
    const options = getAllByRole('option')
    expect(options.length).toBeGreaterThan(0)
  })
  
  it('input must hover after select a option', () => {
    const {getAllByRole, getByTitle} = render(<TextInput />)
    const options = getAllByRole('option')
    const input = getByTitle('input-text')
    if(options.at(1)) fireEvent.click(options.at(1)!)
    expect(input).toHaveFocus()
  })
  
  it('renders search button', () => {
    render(<TextInput />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
})