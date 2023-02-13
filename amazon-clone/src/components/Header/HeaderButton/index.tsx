import Button from 'components/Button'
import styles from './HeaderButton.module.scss'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const HeaderButton = (props : Props) => {
  return (
    <Button className={styles.headerButton} {...props}>
      {props.children}
    </Button>
  )
}

export default HeaderButton
