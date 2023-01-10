import styles from './Footer.module.scss'

import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'

const iconProps = {
  color: 'white',
  size: 24
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FaFacebook {...iconProps}/>
      <FaTwitter {...iconProps}/>
      <FaInstagram {...iconProps}/>
      <span>
        Desenvolvido por Lucas.
      </span>
    </footer>
  )
}

export default Footer