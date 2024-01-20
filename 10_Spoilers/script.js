////////////////////////////////////////////////////////////////////////////
//////////////////////////// Remove a class ////////////////////////////////
////////////////////////////////////////////////////////////////////////////
const second = document.getElementById("second"); //getting the paragraph with class "hidden"
second.classList.remove("hidden"); //removing "hidden" from classlist of id "second", so directly removing the class from the tag.

////////////////////////////////////////////////////////////////////////////
/////////////////////// Spoilers-hiding button /////////////////////////////
////////////////////////////////////////////////////////////////////////////

///////////////// CREATING THE BUTTON THROUGH HTML /////////////////////////
var newButton = document.createElement("button");
newButton.textContent = "Hide Spoilers";
newButton.id = "myButton";
newButton.innerHTML += "!!!!!"; // Side note : It seems that I can't modify this button with outerHTML  because it's expecting the button to actually be in the html file, which it isn't. innerHTML replaces what is already contained within the tag.

//////////////////// ACTUALLY DISPLAYING IT ////////////////////////////////
document
  .getElementById("section2")
  .insertAdjacentElement("afterbegin", newButton); // Plutôt que AppendChild, je peux ici précisément mettre le bouton où je veux.

//////////////////// LISTENING FOR CLICK, executing function on click //////
newButton.addEventListener("click", myFunction); // specifying the Type, then listener (function that listens for an event). Notice the lack of parentheses !!!
// I can call either the const newButton, or the ID I set for the button, both work for the previous line.

function myFunction() {
  /////////// ADDING A "HIDDEN" CLASS WHEN SELECTING BY CLASSNAME ////////
  const spoiler = document.getElementsByClassName("spoiler");

  for (i = 0; i < spoiler.length; i++) {
    // Selecting by classname returns an array since multiple elements can have the same class. You have to iterate and not forget the index !
    spoiler[i].classList.toggle("hidden"); // "toggle" the class attribute rather than "add" to make the button re-clickable.
  }
}

////////////////////////////////////////////////////////////////////////////
///////////////////////// On click highlighting ////////////////////////////
////////////////////////////////////////////////////////////////////////////

/////////////////////// MODIFYING P 1 /////////////////////////////////////
const myBlerb = document.getElementsByClassName("myBlerb")[0];
myBlerb.style["background-color"] = "red";

/////////////////////// MODIFYING P 2 W/ DIFFERENT METHOD /////////////////             SetAttribute to modify CSS style of a DOM Element. Par exemple, document.querySelector('li').getAttribute("class") renverra "item iDevices"
const myBlerb2 = document.getElementsByClassName("myBlerb")[1];
myBlerb2.setAttribute("style", "color : blue");

////////////////////// MODIFYING P1 ONCLICK ///////////////////////////////
// myBlerb.onclick = () => {myBlerb.classList.add("highlighted")}; // can't modify the classList as my previously added style attribute takes precedence on any CSS modification (as style attributes are directly read by the DOM, in case of conflic, the CSS gets ignored.)
myBlerb.onclick = () => {
  myBlerb.setAttribute("style", "background-color : yellow");
};

////////////////////// MODIFYING P2 ONCLICK W/ DIFFERENT METHOD ///////////
myBlerb2.addEventListener("click", () => {
  myBlerb2.classList.toggle("highlighted");
}); // directly adding the content of my would-be function will ignore the AddEventListener method, use a function or an anonymous function instead, like here. toggle or add

//////////////// MODIFYING ENTIRE DOCUMENT.WINDOW ONCLICK /////////////////
// const allParagraphs = document.getElementsByTagName('p');
// document.onclick = () => {
//     for (let i = 0 ; i < allParagraphs.length ; i++) {          // Reminder to use block scoped let
//         allParagraphs[i].setAttribute("style", "background-color : yellow");
//     }
// }

//////////////////////////////////////////////////////////////////////////////
//////////////////////////// Filtrage selon moi //////////////////////////////
//////////////////////////////////////////////////////////////////////////////

function displayMySelection(mySelection) {
  const myArray = document.getElementsByClassName(mySelection);
  const allItems = document.getElementsByClassName("item");
  console.log(myArray); // DEBUG to check if I do get an array of all HTML lines containing the class of the button I clicked.
  for (var oneLi of myArray) {
    // oneLi, c'est comme si on faisait mySelection[i] avec une boucle for ??
    if (oneLi.classList.contains(mySelection) === true)
      oneLi.classList.toggle("hidden"); //or classList.remove()
  }
  for (var oneLi of allItems) {
    // I can only repeat the use of oneLi because I declared it with var, therefore it is locally isolated.
    if (mySelection === "all") oneLi.classList.toggle("hidden"); //or classList.remove()
  }
}

///////////////////////////////////////////////////////////////////////////////
/////////////////////////// Filtrage selon Joseph /////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// let productArray = document.getElementsByTagName('li');

// function displayFilteredProducts(filterString){
//     for (element of productArray) {
//         let product = element ; // Apparrement il faut absolument redéclarer la variable itérative de la boucle for dans une nouvelle variable interne à la boucle (pour éviter que ça choisisse la dernière valeur à chaque fois car la boucle a été finie plusieurs fois avant d'atteindre la dernière jcrois.)
//         product.classList.contains(filterString) ? product.classList.remove('hidden') : product.classList.add('hidden') ;
//     }
// }

// for (element of ['fullDisplay','glutenFree','lactoseFree','nutFree']){
//     let filter = element ;
//     document.getElementById(filter+'Trigger').onclick = function(){displayFilteredProducts}
// }

///////////////////////////////////////////////////////////////////////////////
/////////////////////////// Filtrage selon W3School /////////////////////////// // In a function, the parameters between parentheses serve as templates for different outcomes to occur depending on the value of the parameter not when the funciton is declared, but when it is called upon.
/////////////////////////////////////////////////////////////////////////////// // La manière la plus facile de faire un filtre est " if x.className.contains('hidden'), then x.classList.remove('hidden')", ou for in, ou for of.

// filterSelection("all")

// // Main function (remove "show" class from all, and add it back if necessary)
// function filterSelection(mySelection) { //myselection is a template variable, different outcomes will results from mySelection having different values
//     var allItems, i;
//     allItems= document.getElementsByClassName("item");
//     if (mySelection == "all") mySelection = ""; // This will get all the objects to show up somehow
//     for (i = 0; i < allItems.length; i++) { // iterated on all the results
//       removeClass(allItems[i], "show");  //remove the "show" class from everything
//       if (allItems[i].className.indexOf(mySelection) > -1) addClass(allItems[i], "show"); // If mySelection exists (> -1) with a className of one index [i] within the allItems array, then add the "show" class (display:block) to the filtered items.
//     }
// }

// // Show filtered elements
// function addClass(element, name) { // 'element' and 'name' are placeholder properties that will get different values depending on the values they have when summoned in the main function.
//     var i, arr1, arr2;             // var is the only locally scoped variable I think, this i isn't the same as the other function's i.
//     arr1 = element.className.split(" "); // Separating the summoned element's (allItems[i]'s) classes into an array // the .split() method alows to split a string into an array of words or characters. If you want to separate by words it has to be written .split(" "), if you want to split by character, it has to be .split("")!!
//                                                      alert(arr1)  // DEBUG
//     arr2 = name.split(" "); //  Just transforming "show" into an array so its content can be counted ?
//     for (i = 0; i < arr2.length; i++) { // specifying we want only one modification ?
//       if (arr1.indexOf(arr2[i]) == -1) { // s'il n'y a pas d'index appelé "show"...
//         element.className += " " + arr2[i]; // ...ajouter "show" aux tag HTML classe.
//       }
//     }
//   }

// // Hide elements that are not selected
// function removeClass(element, name) {
// var i, arr1, arr2;
// arr1 = element.className.split(" ");
// arr2 = name.split(" ");
// for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//     arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
// }
// element.className = arr1.join(" ");
// }

// // Add active class to the current control button (highlight it)
// var btnSection = document.getElementById("btnSection");
// var btns = btnSection.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
