//console.log("connecté");
let titre = document.querySelector("#titre");
titre.style.color = "green";

//titre = 2;
//console.log(titre); // Renvoie 2

let score = 0; // Je stocke le nombre
//console.log(score, "initialisation"); // Je vérifie

score = score + 1; // opération
//console.log(score, "après addition"); // Je vérifie
// Je sélectionne
// ici votre code

// Je stocke
// ici votre code

// Je soumets l'élément à une action
// ici votre code

// Je stocke une chaîne de caractères
const cours = "Javascript";
// Je vérifie
//console.log(cours, "cours");

// Je concatène
const mot1 = "Hello";
const mot2 = "World";
const phrase = mot1 + " " + mot2; // Concatènation
//console.log(phrase, "phrase"); // Je vérifie

//Calcul
let calcul = "0"; // Je stocke
calcul = calcul + 1; // Addition
//console.log(calcul, "calcul"); // Je vérifie

// Je sélectionne et Je stocke

const btnRed = document.querySelector("#btn-red");
//console.log(btnRed, 'Bouton rouge');
const btnBlue = document.querySelector("#btn-blue");
//console.log(btnBlue);
const btnGreen = document.querySelector("#btn-green");

let compteur = 0;
//console.log(compteur, "Compteur au démarrage");

// Je soumets l'élément à une ction
btnRed.addEventListener("click", function () {
	//console.log("Cercle red cliqué");

	// Ici l'action
	// Incrémenter le compteur de 1
	add();
});

btnBlue.addEventListener("click", function () {
	//console.log("Cercle blue cliqué");
	add();
});

btnGreen.addEventListener("click", function () {
	remove();
});

function add() {
	compteur = compteur + 5;
	console.log(compteur, "Compteur après incrémentation");
	titre.innerText = compteur;
}

function remove() {
	compteur = compteur - 1;
	titre.innerText = compteur;
}

setTimeout(function () {
	// je supprime les cercles
	btnBlue.remove();
	btnRed.remove();
	btnGreen.remove();
	// à la fin du délai
	console.log("fin du chrono !");
}, 10000);

const newGame = document.querySelector("#new-game");

newGame.addEventListener("click", function () {
	location.reload();
});
