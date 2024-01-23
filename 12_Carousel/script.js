// Y a aucun moyen de faire s'exécuter deu tâches réellement en parallèle, elles peuvent être au mieux entremêlées.
// Donc setTimeOut nous fera toujours perdre le temps indiqué, quoiqu'on clique... https://softwareengineering.stackexchange.com/questions/314773/does-settimeout-really-execute-in-parallel
// Donc j'ai perdu ma journée
// Bah super

// *******************************************************************************************
// ********************************* Slideshow: variables ************************************
// *******************************************************************************************

const imageArray = [
  "https://fac.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Ffac.2F2021.2F02.2F11.2F7ba5b1f8-f03f-4518-a010-9246bf29e1ea.2Ejpeg/970x485/quality/80/crop-from/center/decouvrez-ces-lieux-qui-portent-un-nom-d-ours.jpeg",
  "https://factanimal.com/wp-content/uploads/2022/05/maned-wolf-facts.jpg",
  "https://factanimal.com/wp-content/uploads/2019/01/mantis-shrimp.jpg",
  "https://factanimal.com/wp-content/uploads/2020/12/potoo-facts.jpg",
  "https://i.pinimg.com/originals/b7/3b/89/b73b8979809d182746a65baed61e5fe3.jpg",
  "https://i.pinimg.com/originals/a9/72/27/a9722707117759d27fbadf69373abf6e.jpg",
];
//** slideshow DOM: variables **//
const imagePlaceholder = document.getElementById("imagePlaceholder");
const slides = document.getElementsByClassName("slides")[0];
const dotsContainer = document.getElementsByClassName("dots")[0];
const dots = document.getElementsByClassName("dot");
//** slideshow chronology: variables **//
var currentDotIndex = 0;
let newDot;
//** slideshow buttons: variables **//
var previousPicButton = document.getElementsByClassName("previousPicButton")[0];
var nextPicButton = document.getElementsByClassName("nextPicButton")[0];
var buttonPressed = "none"; // Three options : "none", "next", and "previous"

// *******************************************************************************************
// ********************************** Slideshow: logic ***************************************
// *******************************************************************************************

function showSlides() {
  console.log("DOT INDEX " + currentDotIndex);

  previousPicButton.onclick = () => {
    buttonPressed = "previous"; // storing the info that previous button was clicked in a variable for later
  };

  nextPicButton.onclick = () => {
    buttonPressed = "next";
  };
  // Generating the dots only if none already exist.
  if (!dotsContainer.innerHTML.includes("dot")) {
    for (image of imageArray) {
      newDot = document.createElement("span"); // This has to be in the for/in iteration rather than with the variables as the createElement step is the only one that must be declared multiple times. CreateElement won't happen more than once if you just call as a variable it instead of declaring it.
      newDot.className = "dot";
      dotsContainer.appendChild(newDot);
    }
    dots[0].classList.add("active"); //Then activating the first one
    // Unmarking all dots only if dots already exist.
  } else if (dotsContainer.innerHTML.includes("dot")) {
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    dots[currentDotIndex].classList.add("active"); //Then activating the first one
  }

  if (currentDotIndex + 1 <= imageArray.length) {
    // cycles through the images and replaces them.
    imagePlaceholder.classList.toggle("fade"); // image doesn't fade when replacing src attribute.
    slides.classList.toggle("fade"); // workaround: fading the image at an even rate, and the slides container at an odd rate.
    imagePlaceholder.setAttribute("src", imageArray[currentDotIndex]); // Must not forget to put quotes around the attribute, i.e. "src".
    if (currentDotIndex + 1 === imageArray.length) {
      currentDotIndex = 0; // if last image is reached, go to beginning
    } else {
      currentDotIndex++; // cycle through images normally
    }
    checkIfPressed(); // Launch buttonpress check rountine
  } else {
    console.error("Slide Picture Switching error.");
  }
}

function checkIfPressed() {
  if (buttonPressed === "none") {
    // putting the settimeout in a condition to avoid waiting on button click too    console.log("none Pressed" + currentDotIndex);
    console.log("none Pressed" + currentDotIndex);
    buttonPressed = "end";
    checkIfPressed();
  } else if (buttonPressed === "previous") {
    console.log("prev Pressed" + currentDotIndex);
    clearTimeout(timeoutId);
    buttonPressed = "none"; // resetting button state
    currentDotIndex -= 1;
    imagePlaceholder.setAttribute("src", imageArray[currentDotIndex]);
    checkIfPressed();
  } else if (buttonPressed === "next") {
    console.log("next Pressed" + currentDotIndex);
    buttonPressed = "none"; // resetting button state
    // Index was increased in the "normal" slideshow loop, this is essentially expediting it. No need to increment currentDotIndex;
    clearTimeout(timeoutId);
    imagePlaceholder.setAttribute("src", imageArray[currentDotIndex]);
    checkIfPressed();
  } else if (buttonPressed === "end") {
    var timeoutId = setTimeout(() => {
      showSlides();
    }, 4000); // Auto-switching image every 4 seconds, also prevents loopback hell.
  } else {
    console.log("Something went wrong in displaying your image.");
  }
}

showSlides();
