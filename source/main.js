document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;


    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < heroHeight) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })

    // Selção de Atrações
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (button) {
            const abaAlvo = button.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            button.target.classList.add('shows__tabs__button--is-active');
        })
    }

    function removeBotaoAtivo() {
        const buttons = document.querySelectorAll('[data-tab-button]');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('shows__tabs__button--is-active');
        }

    }
    function escondeTodasAbas() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');

        for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('shows__list--is-active');
        }
    }

    //Seção Faq
    for (let i = 0; questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta());
    }


    function abreOuFechaResposta(elemento) {
        const classe = 'faq__questions__item--is-open';
        const elementoPai = elemento.target.parentNode;

        elementoPai.classList.toggle(classe);
    }

    // Header
    function ocultaElementosDoHeader() {
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden');
    }

    function exibeElementosDoHeader() {
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden');
    }
})