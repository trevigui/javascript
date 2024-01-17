

let button1 = document.getElementsByTagName('button')[0] // never forget the index you dum-dum. //
let div1 = document.getElementsByTagName('div')[0]
button1.onclick = function(){div1.style.backgroundColor = "yellow"}; // backgroundColor is an object of style, not a value to assign to style. "yellow" is the value of backgroundColor.
// ALTERNATIVE METHOD
console.log(button1)
// button1.onclick = function(){div1.style = "backgroundColor:yellow"};
//fancier way to do that is to make the button togglable by assigning it a "highlightTrigger" class for example and using the classList.toggle('highlightTrigger') method in your javascript.


// It seems compared to HTML, creating a DOM element doesn't automatically create an empty text node that you can modify, you have to create the node before you can edit textContents/Innertext.
// Adding to existing div :
document.getElementsByTagName('div')[0].append("<------- Button");
// Adding to non-extant div :
let div = document.createElement('div')
                            // let JAJ = document.createTextNode("FSFS");
document.body.append(div)
div.append("End of document")


swal("Hello world!");