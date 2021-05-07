"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// ///////////////////////////////////
// lectures
// selecting elements
console.log(document.documentElement);
const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

// creating and inserting elements
// const message = document.createElement("div");
// message.classList.add("cookie-message");
// // message.textContent = 'We use cookies for improved functionality and analytics';
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class ="btn btn--close-cookie"> Got it! </button>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));
// // header.before(message);
// header.after(message);

// // delete elements
// document
//   .querySelector(".btn--close-cookie")
//   .addEventListener("click", function () {
//     // new way
//     message.remove();
//     // old way of doing
//     // message.parentElement.removeChild(message);
//   });

// // styles
// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// console.log(getComputedStyle(message).color);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// // document.documentElement.style.setProperty("--color-primary", "orangered");

// // atributes
// const logo = document.querySelector('.nav__logo');


// logo.alt = 'Beautiful minimalist logo';
// // Non standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // data attributes
// console.log(logo.dataset.versionNumber);

// // classes
// logo.classList.add('c','g');
// logo.classList.remove('c','s');
// logo.classList.toggle('c','s');
// logo.classList.contains('c','s');

// // dont use
// // logo.className = 'nelson'
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click',function(e){
  // getting coordinates
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y', window.pageXOffset, window.pageYOffset);

  console.log('height/width viewport', document.documentElement.clientHeight,
   document.documentElement.clientWidth);

  // scrolling
  // this both is the old way
  // first argument is left position
  // window.scrollTo(s1coords.left + window.pageXOffset,
  //    s1coords.top +  window.pageYOffset);

  // old way
  // window.scrollTo({
  //  left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top +  window.pageYOffset,
  //   behavior: 'smooth',
  // });
// new way
// works in modern browser
  section1.scrollIntoView({behavior: 'smooth'});
});

// types of events and event handlers
// const h1 = document.querySelector('h1');

// const alerth1 = function(e){
//   alert('addEventListener: Great! You are reading the heading');

  // h1.removeEventListener('mouseenter',alerth1)
// }
// mouseenter is just like hover
// new way addevenetlistener
// h1.addEventListener('mouseenter', alerth1);

// setTimeout(()=>h1.removeEventListener('mouseenter',alerth1), 3000);

// another way of adding event listener
// this is old way
// h1.onmouseenter = function(e){
//   alert('addEventListener: Great! You are reading the heading');
// };

// Javascript events have a very important property
// event propagation
// They have a so called capturing phase and a bubbling phase

// rgb(255,255,255)
const randomInt = (min,max) => 
Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => 
`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

// console.log(randomColor(0,255));
document.querySelector('.nav__link').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target,e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target,e.currentTarget);
  // to catch event during capturing phase we used true as a  third parameter
});