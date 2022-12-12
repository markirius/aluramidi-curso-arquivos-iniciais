function tocaSom (idElementoAudio) {
  const element =  document.querySelector(idElementoAudio);
  
  if (element === null ) {
    console.log('Elemento não encontrado.');
  }

  if (element != null && element.localName === 'audio' ) {
    element.play();
  } else {
    console.log('Elemento não encontrado ou o seletor é inválido.')
  }
}

function tocaSoms () {
  const listaDeTeclas = document.querySelectorAll('.tecla');

  for (item in listaDeTeclas) {
    const tecla = listaDeTeclas[item];
    const instrumento = tecla.classList[1];
    
    const idAudio = `#som_${instrumento}`;


    tecla.addEventListener('click', () => {
      tocaSom(idAudio);
    })

    tecla.addEventListener('keydown', (evento) => {
      if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
      }
    })

    tecla.addEventListener('keyup', () => {
      tecla.classList.remove('ativa');
    })
  }
}

tocaSoms()
