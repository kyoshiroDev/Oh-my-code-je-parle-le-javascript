console.log("connecté");
// Je sélectionne par classe et je stocke
// le bouton .btn-success;

const btnSuccess = document.querySelector(".btn-success");

// DIV cookies;
const cookies = document.querySelector(".cookies");

btnSuccess.addEventListener("click", function () {
	console.log("bouton cliqué !");
	cookies.style.opacity = "0";
	cookies.remove();
});





