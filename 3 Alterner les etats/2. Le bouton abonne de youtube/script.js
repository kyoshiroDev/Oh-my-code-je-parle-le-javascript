console.log("connecté");

const icone = document.querySelector("i");
const btnAbonne = document.querySelector(".btn");

const abonne = () => {
	icone.classList.toggle("fa-smile-wink");
	icone.classList.toggle("happy");

	if (btnAbonne.innerText === "Abonné") {
		btnAbonne.innerText = "Abonnez-vous";
	} else {
		btnAbonne.innerText = "Abonné";
	}

	btnAbonne.classList.toggle("abonne");
};

btnAbonne.addEventListener("click", abonne);

