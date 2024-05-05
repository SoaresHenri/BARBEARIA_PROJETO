// scripts.js

// Função para rolar suavemente para uma âncora na página
function scrollToAnchor(anchorId) {
    const anchor = document.getElementById(anchorId);
    if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Adicionar evento de clique aos links de navegação para rolar suavemente para a seção correspondente
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const anchorId = this.getAttribute('href').substring(1);
            scrollToAnchor(anchorId);
        });
    });

    // Adicionar classe ao cabeçalho quando a rolagem estiver abaixo do banner
    const header = document.querySelector('header');
    const banner = document.querySelector('.banner');
    window.addEventListener('scroll', function() {
        if (window.scrollY > banner.clientHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
