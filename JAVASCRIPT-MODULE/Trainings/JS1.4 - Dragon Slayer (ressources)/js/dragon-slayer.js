'use strict'; // Mode strict du JavaScript

// GERE L'AFFICHAGE

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/
// L'unique variable globale est un objet contenant l'état du jeu.
let stateGame;

// Déclaration des constantes du jeu, rend le code plus compréhensible



// BONUS 2


/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/
/**
 * Détermine qui du joueur ou du dragon prend l'initiative et attaque
 * @returns {string} - DRAGON|PLAYER
 */
function getAttacker() {
    // On lance 10D6 pour le joueur et pour le dragon
  
    
    
    // BONUS 2
    // Le voleur a un petit avantage car il est rapide et agile, il gagne 1D6% d'initiative
  
    // FIN BONUS 2

    // Si le résultat de player est supérieur au dragon
   
        //on retourne le player
 
    //on retourne le dragon

}
//console.log(getAttacker())

/**
 * Calcule les points de dommages causés par le dragon au chevalier
 * @returns {number} - le nombre de points de dommages
 */
function computeDamagePoint(attacker) {
    // On tire 3D6 pour le calcul des points de dommages causés par le dragon et le joueur
   
    
    /*
      Majoration ou minoration des points de dommage en fonction du niveau de difficulté
      Pas de pondération si niveau normal (condition)
    */

      
            /*
             Au niveau Facile,
             Si le dragon attaque, on diminue les points de dommage de 2D6 %
             Si le joueur attaque, on augmente les points de dommage de 2D6 %
            */
          
             
            /*
             Au niveau difficile,
             Si le dragon attaque, on augmente les points de dommage de 1D6 %
             Si le joueur attaque, on diminue les points de dommage de 1D6 %
            */
       
             
    
    // On retourne les points de dommage

    
    
}

/**
 * Boucle du jeu : répète l'exécution d'un tour de jeu tant que les 2 personnages sont vivants
 */
function gameLoop() {
    // Le jeu s'exécute tant que le dragon et le joueur sont vivants.(boucle)
    
        // Qui va attaquer lors de ce tour de jeu ?
       
        // Combien de dommages infligent l'assaillant = PV que va perdre le personnage attaqué
       
        // Est-ce que le dragon est plus rapide que le joueur ? (condition)
      
            // BONUS 2 Le chevalier a une armure qui le protège, les points de dommage du dragon sont diminués de 1D10 %
          

            // FIN BONUS 2
             // Diminution des points de vie du joueur.
            
        //sinon
       
            
            // BONUS 2 : Le magicien possède un sort très puissant qui majore les points de dommage de 1D10 %
            
            //FIN BONUS 2

            // Diminution des points de vie du dragon.
            
        
        // Affichage du journal : que s'est-il passé ?
       
        // Affichage de l'état du jeu
      
        // On passe au tour suivant.
      
    
}

/**
 * Initialise les paramètres du jeu
 *  Création d'un objet permettant de stocker les données du jeu
 *      ->  les données seront stockées dans une propriété de l'objet,
 *          on évite ainsi de manipuler des variables globales à l'intérieur des fonctions qui font évoluer les valeurs
 *
 * Quelles sont les données necessaires tout au long du jeu (pour chaque round)
 *    -  N° du round (affichage)
 *    -  Niveau de difficulté (calcul des dommages)
 *    -  Points de vie du joueur ( affichage + fin de jeu )
 *    -  Points de vie du dragon ( affichage + fin de jeu )
 */
function initializeGame() {
    // Initialisation de la variable globale du jeu. (qui sera un objet) qu'on initialise au premier round
	stateGame = {};
	stateGame.round = 1;

    // Choix du niveau du jeu (que l'on stock dans l'objet)
	stateGame.level = requestInteger("Choisissez le niveau de jeu: \n1 - Facile \n2 - Normal \n3 - Difficile", 1, 3);
	
	switch(stateGame.level) {
		case 1:
			stateGame.pvDragon = 100 + throwDices(5,10);
			stateGame.pvGamer = 100 + throwDices(10,10);
			break;
		case 2:
			stateGame.pvDragon = 100 + throwDices(10,10);
			stateGame.pvGamer = 100 + throwDices(10,10);
			break;
		case 3: 
			stateGame.pvDragon = 100 + throwDices(10,10);
			stateGame.pvGamer = 100 + throwDices(7,10);
			break;
	}
    console.log(stateGame)

    // BONUS 2 : Choix de la classe du personnage
   
    

    /*
     * Détermination des points de vie de départ selon le niveau de difficulté. (switch)
     * 10 tirages, la pondération se joue sur le nombre de faces
     *    -> plus il y a de faces, plus le nombre tiré peut-être élévé 
     */
    
    

    
     /**
     * BONUS 1
     * On sauvegarde les points de vie initiaux
     */
    
}


/**
 * Affichage de l'état du jeu, c'est-à-dire des points de vie respectifs des deux combattants
 */
function showGameState() {
    // Au départ du jeu, les joueurs sont encore en bonne état !


    //BONUS 1
    


    // FIN BONUS 1
    // Affichage du code HTML (li)
	let main = document.querySelector('main');
	let section = document.createElement('section');
	let img = document.createElement('img');
	section.id = "game-log";
	main.append(section);
	img.id = "shield";
	img.src = "images/shield.png";
	section.before(img);
    
    // Affichage de l'état du joueur (image + figure)
    
    // Si le joueur est toujours vivant (condition)
    // BONUS 3 : utilisation de la balise <progress>
 
        
  
        // Le joueur est mort, on affiche 'GAME OVER'
     
    
    //fermeture de la balise figure
   
    
        
    
    // Affichage de l'état du dragon
    
    // Si le dragon est toujours vivant (condition)
    
        // Le dragon est mort on affiche 'GAME OVER'
    
    //fermeture de figure
    
    //fermeture de li
    
}

/**
 * Affichage du vainqueur
 */
function showGameWinner() {
    

    // Si les points de vie du dragon sont positifs, c'est qu'il est toujours vivant, c'est donc lui qui a gagné le combat (condition) on attribut les resultats aux variables
    


    // Sinon (le dragon est mort) c'est le joueur qui a gagné
    
    //on va afficher un footer en html
    
    //un titre h3
   
    //une figure
    
    //un figcaption avec les infos du gagnant
    
    //une image (celle du gagnant)
    
    //fermeture figure
    
    //fermeture footer
    
}

/**
 * Affiche ce qu'il s'est passé lors d'un tour du jeu : qui a attaqué ? Combien de points de dommage ont été causés ?
 * @param {string} attacker - Qui attaque : DRAGON ou PLAYER
 * @param {number} damagePoints - Le nombre de points de dommage causés
 */
function showGameLog(attacker, damagePoints) {
   

    // Si c'est le dragon qui attaque...
    


    //sinon le player
    
    // Affichage des informations du tour dans le document HTML celui de l'attaquant

    //numéro du round titre 3
    
    //figure
    
    //img
    
    //figcaption
    
    //fermeture figure
    
}
/**
 * Fonction principale du jeu qui démarre la partie
 */
function startGame() {
    // Etape 1 : initialisation du jeu
	initializeGame();
   
    // Etape 2 : exécution du jeu, déroulement de la partie
	showGameState()
	// gameLoop();
    
    // Fin du jeu, affichage du vainqueur
	// showGameLog();
    // showGameWinner();

}
startGame();


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
// appel de la fonction pour commencer le jeu
