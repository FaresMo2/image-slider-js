"use strict";

// Start Select Elements

// All Imges
let imgs = Array.from(document.querySelectorAll(".slider-container img"));

// Number Of Images
let slideImgs = imgs.length;

// Current Sldie
let currentSlide = 5;

// indicators
let indicators = document.querySelector(".indicators");

// We Are In Slide  ==> slideNumberElement
let slideNumberElement = document.getElementById("slide-number");

// Get The Previous And Next Element
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

// Handle Previous And Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// End Select Elements

// Create ul Element
let paginationsElement = document.createElement("ul");

// Set Attr To the Ul Element
paginationsElement.setAttribute("id", "pagination-ul");

// Create Paginations Li
for (let i = 1; i <= slideImgs; i++) {
  // Create Li Element
  let paginationItem = document.createElement("li");

  // Set Attr TO The Paginationitem
  paginationItem.setAttribute("data-index", i);

  // Appenes Numbers Inside Li
  paginationItem.appendChild(document.createTextNode(i));

  // Appenes Li Inside Ul
  paginationsElement.appendChild(paginationItem);
}

// Append Paginations Insdie indicators
indicators.appendChild(paginationsElement);

// Get The Paginations Elements
let paginationCreatedUl = document.getElementById("pagination-ul");

// Create Pagination Item Array
let indicatorsArray = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// Loop Through Pagination Items
for (let i = 0; i < indicatorsArray.length; i++) {

  indicatorsArray[i].onclick = function () {
    
    currentSlide = parseInt(this.getAttribute("data-index"));

    theChecker();
  };
}

theChecker();

// Next SLide function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

// Previous SLide function
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

// Create The Checker Function
function theChecker() {
  // Set Slide Number
  slideNumberElement.innerHTML = `Slide #${currentSlide} Of ${slideImgs}`;

  // Remove All Active Classes
  removeAllActive();

  // Set CLass Active On Current Slide
  imgs[currentSlide - 1].classList.add("active");

  // Set CLass Active On Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // If The Current Slide Is First
  if (currentSlide == 1) {
    // Make Prev Buttom Disable
    prevButton.classList.add("disabled");
  } else {
    // Remove Disabled Class
    prevButton.classList.remove("disabled");
  }

  // If The Current Slide Is 5
  if (currentSlide == slideImgs) {
    // Make Prev Buttom Disable
    nextButton.classList.add("disabled");
  } else {
    // Remove Disabled Class
    nextButton.classList.remove("disabled");
  }
}

// Remove All Active Classes From Pages And Paginations Item
function removeAllActive() {
  // Loop Through Imgs
  imgs.forEach((img) => {
    img.classList.remove("active");
  });

  // Loop Through Pagination Item
  indicatorsArray.forEach((li) => {
    li.classList.remove("active");
  });
}







/*
// Create a Number of Indicators For The Number of Images On The Page
imgs.forEach((el, index) => {
  console.log(el);

  let span = document.createElement("span");
  let spanText = document.createTextNode(`${index + 1}`);

  // Check if it's the first element (index === 0)
  if (index === 0) {
    span.className = "active";
  }

  span.style.backgroundColor = "#F8F8F8";
  span.style.color = "#000";
  span.style.padding = "2px 12px";
  span.style.margin = "5px";
  span.style.display = "inline-block";
  span.style.borderRadius = "4px";
  span.style.cursor = "pointer";
  span.style.fontWeight = "bold";

  if (span.className === "active") {
    span.style.backgroundColor = "#009688";
    span.style.color = "#FFF";
  }

  slideNumberElement.innerHTML = `Slide #${index - 1} Of ${imgs.length}`;

  // Append Number Inside Span
  span.appendChild(spanText);

  // Append Span Inside Indicators
  indicators.appendChild(span);
});


*/
