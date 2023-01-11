import styles from './Button.module.scss'

interface Props {
  children: React.ReactNode
  type?: 'button' | 'reset' | 'submit' | undefined
  onClick?: () => void
}

const Button = ({children, type = undefined, onClick}: Props) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button