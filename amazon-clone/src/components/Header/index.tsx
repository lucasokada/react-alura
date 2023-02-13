import TextInput from 'components/TextInput'
import Button from 'components/Button'
import { splitString } from 'util/splitString'
import styles from './Header.module.scss'
import React, { useState } from 'react'
import Modal from 'components/Modal/Modal'
import HeaderButton from './HeaderButton'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {FaOpencart} from 'react-icons/fa'
import {IoReorderThreeOutline} from 'react-icons/io5'
import {ReactComponent as Logo} from 'assets/amazon-light-logo.svg'

const modalOptions = [
  {
    title: 'Destaques',
    buttonTitles: [
      'Mais Vendidos',
      'Novidades na Amazon',
      'Produtos em alta'
    ]
  },
  {
    title: 'Conteúdo Digital E Dispositivos',
    buttonTitles: [
      'Amazon Fire TV',
      'Amazon Music',
      'Prime Video',
      'Aplicativos Amazon',
      'Dispositivos Kindle e eBooks',
      'Echo e Alexa'
    ]
  },
  {
    title: 'Comprar por Categoria',
    buttonTitles: [
      'Alimentos e Bebidas',
      'Automotivo',
      'Bebês',
      'Beleza e Cuidados Pessoais',
    ]
  },
  {
    title: 'Programas E Recursos',
    buttonTitles: [
      'Amazon Prime',
      'Amazon Super',
      'Dicas de Presentes',
      'Lista do Bebê',
      'Ver Tudo'
    ]
  },
  {
    title: 'Ajuda e configurações',
    buttonTitles: [
      'Sua conta',
      'Ajuda',
      'Sair'
    ]
  }
]

const Header = () => {
  // const {user} = useUsers('lucas.okada2000@gmail.com', 'leiki')
  // console.log(user)
  
  const [isOpenModal, setIsOpenModal] = useState(false)
  const shoppingCart = 5
  
  const user = {
    login: "lucas.okada2000@gmail.com",
    password: "leiki",
    name: "Lucas Eiki Okada",
    city: "Matão",
    cep: "15991278"
  }
  
  const userFirstName = () => {
    const splitedName = splitString(user.name)
    return splitedName[0]
  }
  
  const renderModalContent = () => {
    return (
      <div className={styles.modalContainer}>
        <div>
          {`Olá, ${userFirstName().toUpperCase()}`}
        </div>
        {
          modalOptions.map(obj => (
            <div key={obj.title}>
              <strong>{obj.title}</strong>
              {
                obj.buttonTitles.map(title => (
                  <Button key={title}>{title}</Button>
                ))
              }
            </div>
          ))
        }
      </div>
    )
  }
  
  return (
    <header className={styles.header}>
      <div>
        <Modal showModal={isOpenModal} setShowModal={setIsOpenModal}>
          {renderModalContent()}
        </Modal>
        <div className={styles.headerContent}>
          <div className={styles.headerButtonContainer}>
            <HeaderButton>
              <Logo className={styles.logo}/>
            </HeaderButton>
            <HeaderButton>
              <div className={styles.locationButtonContent}>
                <div>
                  <HiOutlineLocationMarker size={20} />
                </div>
                <div>
                  <p>{`Enviar para ${userFirstName().toUpperCase()}`}</p>
                  <strong>{`${user.city} ${user.cep}`}</strong>
                </div>
              </div>
            </HeaderButton>
          </div>
          <div className={styles['headerContent-textInput']}>
            <TextInput />
          </div>
          <div className={styles.headerButtonContainer}>
            <HeaderButton>
              {`Olá, ${userFirstName().toUpperCase()}`}
            </HeaderButton>
            <HeaderButton>
              Devoluções
            </HeaderButton>
            <HeaderButton>
              <div className={styles.cartButtonContainer}>
                <div className={styles['cartButtonContainer-content']}>
                  <div>
                    <p><strong>{shoppingCart}</strong></p>
                  </div>
                  <div>
                    <FaOpencart size={38}/>
                  </div>
                </div>
                <p><strong>Carrinho</strong></p>
              </div>
            </HeaderButton>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <div className={`${styles['buttonContainer-leftButtons']}`}>
            <HeaderButton onClick={() => setIsOpenModal(true)}>
              Todos
            </HeaderButton>
            <HeaderButton>
              Venda na Amazon
            </HeaderButton>
            <HeaderButton>
              Brinquedos e Jogos
            </HeaderButton>
            <HeaderButton>
              Ofertas do Dia
            </HeaderButton>
            <HeaderButton>
              Ideias para Presente
            </HeaderButton>
            <HeaderButton>
              Mais Vendidos
            </HeaderButton>
            <HeaderButton>
              Eletrônicos
            </HeaderButton>
            <HeaderButton>
              Prime
            </HeaderButton>
            <HeaderButton>
              Ferramentas e Construção
            </HeaderButton>
            <HeaderButton>
              Amazon Moda
            </HeaderButton>
            <HeaderButton>
              Comprar novamente
            </HeaderButton>
          </div>
          <div className={`${styles['buttonContainer-rightButtons']}`}>
            <HeaderButton>
              Tudo para a lista escolar
            </HeaderButton>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
