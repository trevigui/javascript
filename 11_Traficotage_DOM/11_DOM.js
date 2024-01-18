swal("Y a pas de panneau !", {
    icon: "warning",
    buttons: {
        cancel: "L'illusion du choix",
        catch: {
          text: "Nyes!",
          value: "catch",
        },
        'Ynnnnooo?': true,
      },
    });    // appel du module swal défini dans une balise script dans l'HTML.

let button1 = document.getElementsByTagName('button')[0] // never forget the index you dum-dum. //
let div1 = document.getElementsByTagName('div')[0];

button1.onclick = function(){div1.style.backgroundColor === "yellow" ? div1.style.backgroundColor = "" : div1.style.backgroundColor = "yellow"}; // backgroundColor is a property of the style object, not a value to assign to style. "yellow" is the value of backgroundColor.

// ALTERNATIVE METHOD
// button1.onclick = function(){div1.style = "backgroundColor:yellow"};
//fancier way to do that is to make the button togglable by assigning it a "highlightTrigger" class for example and using the classList.toggle('highlightTrigger') method in your javascript.


// It seems compared to HTML, creating a DOM element doesn't automatically create an empty text node that you can modify, you have to create the node before you can edit textContents/Innertext.
// Adding to existing div :
document.getElementsByTagName('div')[0].append("<------- 🅱️outon");
// Adding to non-extant div :
let div = document.createElement('div')
                            // let bleh = document.createTextNode("whateverfunnyhahatext");
document.body.append(div)
div.append("End of document") // Append is enough and appends more than just strings, as opposed to appendText.

///////////////////////////////////////
////////// Ajout Input vidable ////////
///////////////////////////////////////

let myInput = document.createElement('input');
document.body.append(myInput);
myInput.setAttribute('placeholder', 'Veuillez taper du texte.');

let myEraseButton = document.createElement('button');
document.body.append(myEraseButton);
myEraseButton.textContent = "Effacer le texte"

myEraseButton.addEventListener('click', () => myInput.value = "")
