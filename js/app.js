function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }
}

/* COMO EU FIZ
function alterarStatus(id) {
    let status = id;
    let elemento;
    //Verifica o id do elemento li de acordo com status e pega o elemento a
    if (status == 1) {
        elemento = document.getElementById('game-1').querySelector('li > a');
    } else if (status == 2) {
        elemento = document.getElementById('game-2').querySelector('li > a');
    } else {
        elemento = document.getElementById('game-3').querySelector('li > a');    
    }

    if (elemento.innerHTML == 'Alugar') {
        elemento.classList.remove('dashboard__item__button');
        elemento.classList.add('dashboard__item__button', 'dashboard__item__button--return');    
    } else {
        elemento.classList.remove('dashboard__item__button', 'dashboard__item__button--return');
        elemento.classList.add('dashboard__item__button');
    }
    alterarTexto(elemento);
}

function alterarTexto(elemento) {
    if (elemento.innerHTML === 'Alugar') {
        elemento.innerHTML = 'Devolver';
    } else {
        elemento.innerHTML = 'Alugar'
    }
}
*/