import styles from './Modal.module.scss'

interface Props {
  showModal?: boolean
  setShowModal?: (showModal: boolean) => void
  children: React.ReactNode
}

const Modal = ({children, showModal = false, setShowModal}: Props) => {
  const handleCloseButtonClick = () => {
    setShowModal && setShowModal(false)
  }
  
  return (
    <div>
      {showModal && ( 
        <>
          <div className={styles.container}>
            <div className={styles.modalcontainer}>
              {
                children
              }
            </div>
            <div className={styles.buttoncontainer}>
              {
                <button onClick={handleCloseButtonClick}>X</button>
              }
            </div>
          </div>
          <div className={styles.blackbackground}/>
        </>
      )}
    </div>
  )
}

export default Modal