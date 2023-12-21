console.log('exemple'); // Ceci est un commentaire. Pas besoin de le fermer. On le met à la fin
console.log('exemple2'); /* Ceci est aussi un commentaire. On le met au milieu d'une ligne pour désactiver des éléments.*/ console.log('exemple2');

// On n'oublie pas les points-virgules entre les déclarations.

// clear() pour clear la console



// Indiquer les multiples de 5 et de 3

function estMultipleDeTrois(nombre) {
    return nombre % 3 === 0;
}
function estMultipleDeCinq(nombre) {
    return nombre % 5 === 0;
}
for ( let nombre=1 ; nombre<=199 ; nombre++ ) { 
    if (estMultipleDeTrois(nombre) && estMultipleDeCinq(nombre)) {
        document.write("<p>" + nombre + " FIZZBUZZ</p>");
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
