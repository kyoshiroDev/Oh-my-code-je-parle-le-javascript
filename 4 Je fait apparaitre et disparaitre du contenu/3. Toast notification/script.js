const btn = document.querySelector('.btn');
const ctn = document.querySelector('.container-notifications');

btn.addEventListener('click', (e) => {
    // Je crée un élément
    const notification = document.createElement('div')
    // Je donne un style a la DIV
    notification.classList.add('toast');
    // J'insère du contenu texte
    notification.innerText = "Votre fichier est bien enregistré !"
    // J'accroche notification a l'élément ctn
    ctn.appendChild(notification)
    // A la fin du chrono, je retire la notification du DOM
    setTimeout(() => {
        notification.remove()
    }, 2000)
})