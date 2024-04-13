//console.log("connecté");

// Je sélectionne et je stock

// La DIV switch
const switchBox = document.querySelector(".switch");
//console.log(switchBox);
// La DIV btn (le cercle)
const btn = document.querySelector(".btn");
//console.log(btn);
// L'icône
const icone = document.querySelector("i");
//console.log(icone);
// La DIV container
const container = document.querySelector(".container");
//console.log(container);
// Le titre
const title = document.querySelector("h1");
//console.log(title);

// Je soumets la DIV switch à une action au clic
switchBox.addEventListener("click", () => {
    //Je déplace le cercle
    btn.classList.toggle("btn-change");
    // Je déplace l'icône
    icone.classList.toggle("icone-change");
    // Je change l'icône
    icone.classList.toggle("fa-sun");
    // La DIV switch change de couleur de fond
    switchBox.classList.toggle('switch-change')
    // La DIV container change de couleur de fond
    container.classList.toggle('container-change')
    // Je modifie le texte du titre
    if (title.innerText === "DARK MODE") {
        title.innerText = "LIGHT MODE";
        title.style.color = '#61B3FF'
    } else {
        title.innerText = "DARK MODE";
        title.style.color = '#FFF'
    }
});



