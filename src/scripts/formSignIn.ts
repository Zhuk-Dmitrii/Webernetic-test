import { variables } from './variables'

export function formSignIn() {
  const inputLogoElement = variables.inputLogoSignIn
  const inputPassElement = variables.inputPassSignIn
  const formElement = variables.formSignIn
  const modalAuthElement = variables.modalAuth

  formElement.addEventListener('submit', handleSubmitForm)

  function handleSubmitForm(event: SubmitEvent) {
    event.preventDefault()

    const valueLogo = inputLogoElement.value
    const valuePass = inputPassElement.value

    const formData = new FormData()
    formData.append('logo', valueLogo)
    formData.append('password', valuePass)

    const formValues = Object.fromEntries(formData.entries())
    console.log(formValues)

    modalAuthElement.classList.remove('open')
    formElement.reset()
  }
}
