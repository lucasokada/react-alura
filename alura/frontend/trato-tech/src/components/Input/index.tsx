import { forwardRef, InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  return (
    <input
      className={styles.input}
      ref={ref}
      {...props}
    />
  )
})

export default Input