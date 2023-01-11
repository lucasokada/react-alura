import Button from 'components/Button'
import Header from 'components/Header/Header'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import {useForm, FieldValues} from 'react-hook-form'
import styles from './Anuncie.module.scss'
import { useDispatch } from 'react-redux'
import { cadastrarItem } from 'store/reducers/itens'
import { useParams } from 'react-router-dom'
import Input from 'components/Input'

type CategoriasSelector = {
  nome: string,
  id: string
}

const Anuncie = () => {
  const dispatch = useDispatch()
  const {nomeCategoria = ''} = useParams()
  const categorias = useSelector<RootState, CategoriasSelector[]>(state => state.categorias.map(({nome, id}) => ({nome, id})))
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      categoria: nomeCategoria,
      titulo: null,
      descricao: null,
      foto: null,
      preco: null
    }
  })
  
  const { errors } = formState
  
  const cadastrar = (data: FieldValues) => {
    dispatch(cadastrarItem(data))
  }
  
  return (
    <div className={styles.container}>
      <Header
        titulo='Anuncie aqui!'
        descricao='Anuncie seu produto no melhor site do Brasil'
      />
      <form className={styles.formulario} onSubmit={handleSubmit(cadastrar)}>
        <Input className={errors.titulo ? styles['input-erro'] : ''}  {...register('titulo', {required: 'Campo obrigatório'})} placeholder='titulo do produto' alt='titulo do produto' />
        {errors.titulo && <span className={styles['mensagem-erro']}> {errors.titulo.message} </span>}
        
        <Input className={errors.descricao ? styles['input-erro'] : ''}  {...register('descricao', {required: 'Campo obrigatório'})} placeholder='Descrição do produto' alt='descrição do produto' />
        {errors.descricao && <span className={styles['mensagem-erro']}> {errors.descricao.message} </span>}
        
        <Input className={errors.foto ? styles['input-erro'] : ''}  {...register('foto')} placeholder='URL da foto do produto' alt='url da foto do produto' />
        
        <select 
          className={errors.categoria ? styles['input-erro'] : ''} 
          {...register('categoria', {required: 'Campo obrigatório'})}
          disabled={Boolean(nomeCategoria)}
        >
          <option value='' disabled>
            Selecione a categoria 
          </option>
          {categorias.map(categoria => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nome }
            </option>
          ))}
        </select>
        {errors.categoria && <span className={styles['mensagem-erro']}> {errors.categoria.message} </span>}
        
        <Input 
          className={errors.preco ? styles['input-erro'] : ''} 
          {...register('preco', {required: 'Campo obrigatório', valueAsNumber: true})} 
          type='number'
          placeholder='Preço do produto' 
        />
        {errors.preco && <span className={styles['mensagem-erro']}> {errors.preco.message} </span>}
        
          <Button type='submit'>
            Cadastrar produto
          </Button>
      </form>
    </div>
  )
}

export default Anuncie
