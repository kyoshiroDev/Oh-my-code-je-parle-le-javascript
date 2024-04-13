/* Création d'une modal en JS */


// Je sélectionne et je stock la DIV modal-container
const modal = document.querySelector('.modal-container');

// Je sélectionne le bouton
const btn = document.querySelector('.btn-success');

// Je sélectionne le code
const code = document.querySelector('.code');

// Je sélectionne l'icône
const icone = document.querySelector('.fa-times');

// Affichage de la modal
displayModal = () => {
    // On initialise dans une variable le top de la page
    let hauteur = document.documentElement.scrollTop;

    // On affiche la modal si la position du scroll est > a 400px de la hauteur de la page
    if (hauteur > 400) {
        modal.style.display = 'flex';
    }
}
window.addEventListener('scroll', displayModal)


// Affichage du code
btn.addEventListener('click', () => {
    code.style.display = 'block';
    btn.style.display = 'none';
})

// Fermeture de la fenêtre
icone.addEventListener('click', () => {
    modal.style.display = 'none';
    // Au clic sur la croix on annul l'événement scroll
    window.removeEventListener('scroll', displayModal)
})