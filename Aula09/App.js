const registerBtn = document.querySelector('.register-btn')

registerBtn.addEventListener('click', event => {
  /// Escreva aqui o seu código, seguindo estas orientações passo a passo:
  event.preventDefault()
  // 1. Obter o valor introduzido no input do e-mail.
  const inputEmail = document.querySelector('#email-input')
  // 2. Obter o valor introduzido no input de senha.
  const inputPassword = document.querySelector('#password-input')
  // 3. Obter o valor do input de rádio.
  const inputRadio = document.querySelector('#age_yes')
  // 4. Obter o valor do input com o checkbox.
  const inputCheck = document.querySelector('#tyc-input')
  // 5. Validar se o utilizador for maior de idade. Caso contrário, mostramos
  // uma mensagem de erro: "Tem de ser maior de idade para se registar no site".

  // 6. Validamos se o utilizador aceitou os termos e condições. Caso contrário, exibimos
  // uma mensagem de erro: "Deve aceitar os termos e condições para se registar no site".

  // 7. Por fim, se tudo estiver correto, exibimos um objeto no console com as informações definidas pelo utilizador.
})
