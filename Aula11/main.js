//localStorage.setItem('nomeUsuario', 'Salomão Santos')

let botaoLoogar = document.querySelector('#logar')

botaoLoogar.addEventListener('click', function (event) {
  let inputNomeUsuario = document.querySelector('input')

  localStorage.setItem('nomeUsuario', inputNomeUsuario.value)

  localStorage.setItem('idadeUsuario', 25)

  window.location.href = 'home.html'
})
