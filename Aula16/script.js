const loadTime = 5000

//Função que simulia um progresso que demora 5 minutos para carregar

function animeBar() {
  let loadingBar = document.querySelector('#loading-bar')

  // Inicializamos o processo em 0, para assegurarmos
  // que sempre começará do zero
  let width = 0

  // Calculamos o progresso com base no tempo total da carga
  const progressAboutTotalTime = loadTime / 100

  // Criamos um intervalo que se repete no tempo que calculamos
  // para ir incrementando o progresso.
  let id = setInterval(increaseProgress, progressAboutTotalTime)

  function increaseProgress() {
    // Se o progresso estiver completo…
    if (width >= 100) {
      clearInterval(id)
    } else {
      width++

      // Modificamos o DOM, para impactar no novo progresso.
      loadingBar.style.width = width + '%'
      loadingBar.innerHTML = width + '%'
    }
  }
}

document.querySelector('#start-loading').addEventListener('click', animeBar)
