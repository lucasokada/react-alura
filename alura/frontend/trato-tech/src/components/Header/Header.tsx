import styles from './Header.module.scss'
import TituloComImagem from './TituloComImagem'
import TituloSemImagem from './TituloSemImagem'

const Header = ({titulo, descricao, classname = '', imagem}: {
  titulo: string, 
  descricao: string, 
  classname?: string,
  imagem?: string}
  ) => {
  return (
    <header className={styles.header}>
      {titulo && !imagem &&
        <TituloSemImagem titulo={titulo} descricao={descricao} />
      }
      
      {titulo && imagem &&
        <TituloComImagem titulo={titulo} descricao={descricao} imagem={imagem} className={classname}/>
      }
    </header>
  )
}

export default Header