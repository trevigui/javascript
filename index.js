console.log('exemple'); // Ceci est un commentaire. Pas besoin de le fermer. On le met à la fin
console.log('exemple2'); /* Ceci est aussi un commentaire. On le met au milieu d'une ligne pour désactiver des éléments.*/ console.log('exemple2');

// On n'oublie pas les points-virgules entre les déclarations.

// clear() pour clear la console

// les fonctions doivent finir par return() pour servir à quelque chose. dans le code, il faut retourner la valeur de la fonction. S'il y a une fonction parent contenant plusieurs fonctions enfants, on peut ne mettre qu'un return qu'à la fin de la fonction parent.
// En supposant que je mets une boucle for dans ma fonction, je peux mettre un return; dans ma boucle for pour créer un point d'arrêt (un peu comme un break.)



// Indiquer les multiples de 5 et de 3
//Variable modulus(%) x signifie "le reste de la variable qui est divisible par x"

function estMultipleDeTrois(nombre) {
    return nombre % 3 === 0; // Si le reste d'une division de la variable par 3 est égal à 0, alors le nombre est un multiple de 3.
    // Retournera "true" si le résultat de nombre % 3 est 0.
    // donc estMultipleDeTrois(nombre) devient estMultipleDeTrois(true) si le résultat de nombre % 3 est 0. 
}
function estMultipleDeCinq(nombre) {
    return nombre % 5 === 0; // Si le reste d'une division de la variable par 3 est égal à 0, alors le nombre est un multiple de 5.
    // Retournera "true" si le résultat de nombre % 5 est 0.
    // donc estMultipleDeCinq(nombre) devient estMultipleDeCinq(true) si le résultat de nombre % 5 est 0. 
}
for ( let nombre=1 ; nombre<=199 ; nombre++ ) { 
    if (estMultipleDeTrois(nombre) && estMultipleDeCinq(nombre)) {  // && opérateur logique qqch ET qqch. Veiller à ne pas fermer la parenthèse avant le &&, ne pas séparer les deux conditions entre quatre parenthèses. C'est la parenthèse du if, il ne peut y en avoir qu'une seule.
        // On pourrait sinon créer une fonction estMultipleDeQuinze et ça engloberait tous mes ifs d'un coup.
        document.write("<p>" + nombre + " FIZZBUZZ</p>"); // It is obligatory that I put this condition up top as there already is a FIZZ condition for number 15 and it will be read first if the FIZZ condition is atop the list.
    }
    else if (estMultipleDeTrois(nombre)) {
        document.write("<p>" + nombre + " FIZZ</p>");
    }
    else if (estMultipleDeCinq(nombre)) {
        document.write("<p>"+ nombre +" BUZZ</p>");
    }
    else{
        document.write("<p>" + nombre + "</p>");
    }
}




// Chatbot

let input = prompt('Posez une question') ;
if (input == 'bonjour') { // Do not use the the assignment operator (=).
alert ('Bonjour à toi !') ;
} else if (input == 'tu vas bien ?') { // Do not use the the assignment operator (=). Using the comparative operator (==) allows for case usage lenience.
	alert ('Bien et toi ?') ;
} else {
	alert ('Désolé, je n\'ai pas compris') ; // I need to escape the single quote with a backslash and a double quote with a slash.
}


// Chatbot pas sympa

function chatBot() {
    let input1 = prompt('Posez une question : Une seule réponse possible : "bonjour".') ;
    if (input1 == 'bonjour') { // Do not use the the assignment operator (=).
        let input2 = prompt('Bonjour, ça va ?');    // I have to declare the variable again to ask for another value fot my prompt.
        if(input2=='oui'){ // Est-ce que taper une apostrophe lorsque le prompt appraraît détruit le code? Apparemment pas.
            alert("Super ! Je suis content de te voir.");
        } else if (input2=='non') {
            alert('Désolé, il faut que je file.')
        } else {
            alert('Désolé, je n\'ai pas compris ta réponse');
        }
    } else {
        alert('Désolé, je n\'ai pas compris ta réponse');
    }
}
chatBot() // Appel de la fonction chatBot créée au dessus.

                        // Devine mon chiffre ---- Marche passsssssssssssssssssssssssssssssssssssssssss


                        let win = Math.round(Math.random() * 100) ;
                        let chance = prompt("Trouve le bon nombre entre 1 et 100.") ;
                        for (let attempt = 1 ; attempt>=10 || chance !== win ; attempt++ ) { // to put multiple let declarations in a 'for' loop, I mustn't repeat 'let'.
                            // By default, math.random() picks a number from 0 to 1, so multiplying it to 100  will make it into a number b/w 1 and 100.
                            if (chance > win) {
                                alert('Trop haut!') ;
                            } else if (chance < win) {          //Attention, 'if else' n'est pas possible. C'est 'else if' qu'il faut écrire.
                                alert('Trop bas!') ;
                            } else if (chance === win)  {
                                alert('Bravo') ;
                            }
                        }

                // Devine mon chiffre de Jérémie
                                        
                function guessingGame() {
                    // Initialiser le nombre aléatoire
                    let secretNumber = Math.floor(Math.random() * 101);
                    /console.log('Le nombre secret est :', secretNumber); affiche le resultat dans la console/

                    // Permettre au joueur de tenter de deviner le nombre
                    for (let i = 0; i < 10; i++) {
                        let guess = parseInt(prompt("Entrez un nombre entre 0 et 100:"));

                    // Vérifier si le joueur a réussi à deviner le bon nombre
                    if (guess === secretNumber) {
                        alert("Bravo ! Vous avez deviné le bon nombre !");
                        return;
                    }

                    // Informer le joueur s'il doit saisir un nombre plus grand ou plus petit
                    else if (guess < secretNumber) {
                        alert("Plus grand");
                    } else {
                        alert("Plus petit");
                    }
                    }

                    // Si le joueur a épuisé toutes ses tentatives, afficher le nombre secret
                    alert("Dommage, vous avez épuisé toutes vos tentatives ! Le nombre secret était " + secretNumber + ".");
                }
                guessingGame();

