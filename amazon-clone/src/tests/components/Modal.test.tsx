import { fireEvent, render, screen } from '@testing-library/react';
import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';


const setStateMock = jest.fn()
const useStateMock: any = (useState: any) => [useState, setStateMock]
jest.spyOn(React, 'useState').mockImplementation(useStateMock)

describe('Modal component', () => {
  test('render a open modal', () => {
    const {getByText} = render(
      <Modal showModal>
        myModal
      </Modal>
    )
    
    expect(getByText('myModal')).toBeInTheDocument()
  })
  
  test('render a close modal', () => {
    const {queryByText} = render(
      <Modal showModal={false}>
        myModal
      </Modal>
    )
    
    expect(queryByText('myModal')).not.toBeInTheDocument()
  })
  
  test('render close button in open modal', () => {
    const {getByRole} = render(
      <Modal showModal>
        myModal
      </Modal>
    )
    
    expect(getByRole('button')).toBeInTheDocument()
  })
  
  test('click in close button setState function must be called', () => {
    const [showModal, setShowModal] = useStateMock(true)
    const {getByRole, queryByText} = render (
      <Modal showModal={showModal} setShowModal={setShowModal}>
        myModal
      </Modal>
    )
    
    const button = getByRole('button')
    fireEvent.click(button)
    expect(setShowModal).toBeCalled()
  })
})