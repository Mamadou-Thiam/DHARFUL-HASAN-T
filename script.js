document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('main-nav');
    const navLinks = nav.querySelectorAll('a');

    // 1. Gérer l'ouverture/fermeture du menu sur le bouton
    menuToggle.addEventListener('click', function() {
        // Toggle la classe 'active' sur la navigation
        nav.classList.toggle('active');
        // Mettre à jour l'état aria-expanded pour l'accessibilité
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);
    });

    // 2. Fermer le menu après avoir cliqué sur un lien (utile sur mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // S'assurer que le menu est fermé si on clique sur un lien de navigation
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
});