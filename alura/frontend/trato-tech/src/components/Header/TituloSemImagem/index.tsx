import styles from './TituloSemImagem.module.scss'

interface Props {
  titulo: string,
  descricao: string,
  children?: React.ReactNode
}

const TituloSemImagem: React.FC<Props> = ({titulo, descricao, children}: Props) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.titulo}>{titulo}</h1>
        <h2 className={styles.descricao}>{descricao}</h2>
        {children}
    </div>
  )
}

export default TituloSemImagem