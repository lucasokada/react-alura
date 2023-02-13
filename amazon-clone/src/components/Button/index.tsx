import { HTMLAttributes } from 'react'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
}

const Button = (props: Props) => {
  return (
    <button className={props.className} {...props}>
      {props.children}
    </button>
  )
}

export default Button