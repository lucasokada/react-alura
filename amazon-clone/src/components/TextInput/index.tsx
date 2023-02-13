import classNames from 'classnames'
import { useRef, useState } from 'react'
import { useCategories } from 'hooks/useCategories'
import {BsSearch} from 'react-icons/bs'
import styles from './TextInput.module.scss'

const iconProps = {
  backgroundColor: '#F7BC68'
}

const TextInput = () => {
  const [selectedOption, setSelectedOption] = useState('')
  const {categories} = useCategories()
  const inputRef = useRef<HTMLInputElement>(null)
  const selectRef = useRef<HTMLSelectElement>(null)
  
  return (
    <div className={styles.inputContainer}>
      <div className={styles.selectorContainer}>
        <select
          className={styles['selectorContainer-selector']}
          name='categories' 
          title='select-categories'
          onClick={() => {
            inputRef.current?.focus()
            if(selectRef.current) {
              setSelectedOption(selectRef.current.value)
            }
          }}
          ref={selectRef}
        >
          {categories.map((category) => <option key={category.name} value={category.name}>{category.name}</option>)}
        </select>
      </div>
      <div className={styles.textInputContainer}>
        <input title='input-text' ref={inputRef} className={styles.textInput} />
      </div>
      <button className={styles.button}>
        <BsSearch className={styles['button-icon']} size={20} {...iconProps}/>
      </button>
    </div>
  )
}

export default TextInput