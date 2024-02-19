/* const diceNumber = parseInt(prompt('Combien de dés veux-tu lancer ?')); */

function randomNumber(min, max) {
	const generate = Math.random() * (max - min) + min;
	return Math.round(generate);
}

function createDice(target) {
	// * créer une div et lui donner une classe:
	const dice = document.createElement('div');
	dice.classList.add('dice');
	//ou * dice.className = "dice"

	//* je recupere un nombre aléatoire que je multiplie par 100
	const imageOffSet = randomNumber(1, 6) * 100;
	dice.style.backgroundPosition = `${imageOffSet}px`;

	//* je recupere l'élément dans lequel je veux insérer la nouvelle div
	const boardElement = document.getElementById(target);
	//ou * const player_element = document.querySelector('#player');

	boardElement.append(dice);
	//* append = ajoute l'élement à la fin
	//* prepend = ajoute l'élément au debut
}

// création de la zone adverse
function createDealer() {
	const divElement = document.createElement('div');
	divElement.classList.add('board');
	divElement.id = 'dealer';
	// divElement.setAttribute('id', 'dealer')
	const appElement = document.querySelector('#app');
	appElement.append(divElement);
}
createDealer();

let diceNumber = 3; /* equivaut au nombre de dés lancés. au début : 3 */
function play() {
	// je fais une boucle, pour chaque nombre de la saisie utilisateur, génère un dé :
	for (let index = 0; index < diceNumber; index++) {
		createDice('player');
		createDice('dealer');
	}
}

/* ----------------Améliorations-------------- */

//* Notre fonction pour rejouer
//! etape 3
function newGame(event) {
	resetBoard('player');
	resetBoard('dealer');
	play();
}

function resetBoard(target) {
	document.getElementById(target).innerHTML = '';
	//* on peut aussi utiliser textContent
}
//! etape 1
const button = document.getElementById('play');
//! etape 2 click
button.addEventListener('click', newGame);

//? PLutot que de cliquer sur le bouton, je tape entrer

//* les event keyup permet de brancher des evenements lié au clavier
//! etape 3
function handleEnter(event) {
	console.log(event);
	//* si la touche est enter, fais un nouveau jeu
	if (event.key === 'Enter') {
		newGame();
	}
}

//! etape 1 et etape 2 keyup
document.addEventListener('keyup', handleEnter);

//? faire changer le nombre de dés en fonction du slider selectionner par l'utilisateur

//! etape 3 CREER ECOUTEUR qui est une fonction ayant event en parametre
function handleDiceNumber(event) {
	console.log(event.target.value);
	//* mon element html qui vient de changer
	const inputSlider = event.target;
	//* recupere la valeur du input type range
	const newDiceNumber = inputSlider.value;
	//* il faut recuperer la span
	//* changer la valeur de la span ayant l'id diceNumberDisplay grace textContent
	const span = document.getElementById('diceNumberDisplay');
	span.textContent = newDiceNumber;
	//* je modifie la variable qui contient le nombre de dés
	diceNumber = newDiceNumber;
}

//! etape 1 recupere ELEMENT
const diceSlider = document.querySelector('#diceNumber');
//* sur un input de type range, on peut utiliser un event_type particulier qui est "change"
//! etape 2 BRANCHE sur un EVENT change
diceSlider.addEventListener('change', handleDiceNumber);

/* ------SET TIME OUT --------- */
//? SET TIMEOUT
//* Objectif faire apparaitre les des de dealer avec un decalage

/* setTimeout(() => {
//   execute le code
  console.log('execute toi apres 1.5s');
}, 1500); */

function play(target = 'player') {
	//* Ici je veux creer les dés pour la div "player" en 1er
	for (let index = 0; index < diceNumber; index++) {
		createDice(target);
	}
	if (target === 'player')
		setTimeout(() => {
			//fonction recursive comme si on faisait une boucle dans la fonction la boucle s'arrete si la condition n'est pas respecté
			play('dealer');
		}, 1500);
}


/* ----BONUS----- */

//! SET INTERVAL - BONUS - pas de challenge, donc pour ceux qui veulent découvrir

//* Utiliser setInterval

//* creer une fonction displayCounter
//* ajouter dans le dealer une div qui contiendra le compteur
//* Initialise le compteur à 3
//* affiche le nombre
//* dans une variable intervalCounter, donne lui comme valeur la fonction setInterval() avec un temps
//* https://developer.mozilla.org/en-US/docs/Web/API/setInterval
//* Pour chaque interval, decremente le counter de 1, et met à jour la valeur de la div
//* Si la variable compteur passe à 0, supprime l'élément remove()
//* https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
//* stop la fonction setInterval avec clearInterval()

