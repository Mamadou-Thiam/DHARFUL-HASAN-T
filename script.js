document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', function() {
        // Basculer la classe 'active' sur la navigation
        mainNav.classList.toggle('active');
        
        // Mettre à jour l'attribut aria-expanded pour l'accessibilité
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);
    });
});