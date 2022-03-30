let inputCepReference = document.querySelector('#cep')
let inputCidadeReference = document.querySelector('#cidade')
let inputLogradouroReference = document.querySelector('#logradouro')

let submitButtonReference = document.querySelector('button')

submitButtonReference.addEventListener('click', event => {
  event.preventDefault()
  fetch(`https://viacep.com.br/ws/${inputCepReference.value}/json/`).then(
    res => {
      res.json().then(success => {
        inputCidadeReference.value = success.localidade
        inputLogradouroReference.value = success.logradouro
      })
    }
  )
})
