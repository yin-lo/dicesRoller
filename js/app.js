// nombre aléatoire de 1 à 6 :
function getRandomNumber() {
	return Math.ceil(Math.random() * 6);
}
// cibler la div avec l'id 'player' :
const playerElement = document.getElementById('player');

// fonction pour créer un dé
function createDice(zone) {
	// créer une div :
	const diceElement = document.createElement('div');

	// ajout d'une classe :
	diceElement.classList.add('dice');

	// afficher chaque face du dé avec sa bonne valeur numérique :
	diceElement.style.backgroundPositionX = `${getRandomNumber() * -100}px`;

	// insérer la div 'class dice dans la div id player :
	zone.appendChild(diceElement);
}

let diceQuantity = parseInt(prompt(`Combien de dés veux-tu lancer (maximum 5 dés) ?`));

// si l'entrée n'est pas un nombre on redemande :
while (isNaN(diceQuantity)) {
	diceQuantity = parseInt(prompt(`Tape un nombre pour savoir combien de dés lancer (maximum 5 dés)`));
}

// on borne les réponses entre 1 et 5 (si l'utilisateur note <1 on prend 1 // si l'utilisateur note>5, on prend 5)
diceQuantity = Math.max(1, Math.min(5, diceQuantity));


// création de la zone adverse :
const dealerElement = document.createElement('div');
dealerElement.classList.add('board');
dealerElement.id = 'dealer';


// relier la réponse au nombre de dés créés
for (let index = 1; index <= diceQuantity; index++) {
	createDice(playerElement);
	createDice(dealerElement);
}

playerElement.parentElement.appendChild(dealerElement);