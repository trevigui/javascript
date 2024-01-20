////////////////////////////////////////////////////
////////////////////BONJOUR/////////////////////////
////////////////////////////////////////////////////

// Replacing h1 element's textContent to say HELLO WORLD.
let myTitle = document.getElementById("header1");
myTitle.textContent = "☢️💥☢️💥☢️💥☢️💥☢️💥☢️💥☢️💥☢️";
// alert("BOOM"); // Look at the sheer amount of nodes in there. It can help understand the DOM tree.
// alert("HELLO WORLD"); // L'alerte s'affiche AVANT que l'objet textContent de myTitle soit modifié, bizzarement.

////////////////////////////////////////////////////
//////////////Afficher les inputs///////////////////
////////////////////////////////////////////////////

let form = document.getElementsByName("formulaire")[0]; // obligatoire de mettre l'index car la method getElements est plurielle et suppose plusieurs names. En choisir un.
let input1 = form.getElementsByTagName("input")[0].value; // ne pas oublier .value, ça prend l'attribut value dans <input value="abcdfefe">!

let inputs = form.querySelectorAll("input");
let input2 = inputs[inputs.length - 1].value; // Tous les inputs, index longueur. On met -1 car la longueur commence à 1, pas 0, donc c'est offset by one.

window.alert(`${input1}\n\n\n\n${input2}`);

// https://www.google.com/search?q=%5Eprevent+default+window+javascript&client=firefox-b-d&sca_esv=597822906&ei=TlihZczWGLv4kdUP9KSy0AE&ved=0ahUKEwjMtcntktiDAxU7fKQEHXSSDBoQ4dUDCBA&uact=5&oq=%5Eprevent+default+window+javascript&gs_lp=Egxnd3Mtd2l6LXNlcnAiIl5wcmV2ZW50IGRlZmF1bHQgd2luZG93IGphdmFzY3JpcHQyBhAAGAgYHkjDEVCrDFj_EHAAeAOQAQCYAWGgAfcEqgEBOLgBA8gBAPgBAcICBBAAGEfCAggQABiABBiiBMICCBAAGAgYHhgN4gMEGAAgQeIDBRIBMSBAiAYBkAYI&sclient=gws-wiz-serp
// Pour rajouter un onload window
// Pour rajouter un bouton submit de formulaire.
