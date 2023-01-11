import styles from './Header.module.scss'
import TituloComImagem from './TituloComImagem'
import TituloSemImagem from './TituloSemImagem'

const Header = ({titulo, descricao, classname = '', imagem, children}: {
  titulo: string, 
  descricao: string, 
  classname?: string,
  imagem?: string,
  children?: React.ReactNode
}
  ) => {
  return (
    <header className={styles.header}>
      {titulo && !imagem &&
        <TituloSemImagem titulo={titulo} descricao={descricao}>
          {children}
        </TituloSemImagem>
      }
      
      {titulo && imagem &&
        <TituloComImagem titulo={titulo} descricao={descricao} imagem={imagem} className={classname}>
          {children}
        </TituloComImagem>
      }
    </header>
  )
}

export default Header