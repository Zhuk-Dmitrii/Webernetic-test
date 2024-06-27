import { variables } from './variables'

export function modalAuth() {
  const btnDemoElement = variables.btnDemo
  const btnCloseModalElement = variables.btnClose
  const modalAuthElement = variables.modalAuth

  // event listeners
  btnDemoElement.addEventListener('click', handleOpenModalAuth)
  btnCloseModalElement.addEventListener('click', handleClickBtnCloseModal)
  modalAuthElement.addEventListener('click', handleClickOutsideModal)

  // event handlers
  function handleOpenModalAuth() {
    modalAuthElement.classList.add('open')
  }

  function handleClickBtnCloseModal() {
    modalAuthElement.classList.remove('open')
  }

  function handleClickOutsideModal(event: MouseEvent) {
    const target = event.target as HTMLElement

    if (target === modalAuthElement) {
      modalAuthElement.classList.remove('open')
    }
  }
}
