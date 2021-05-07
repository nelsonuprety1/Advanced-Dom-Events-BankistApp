"use strict";

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
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

// button scrolling
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

// Page navigation
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   });
// });

// event delegation
// 1) first we add the event listener to a common parent element of all the elements that 
// we're interested in
// 2) and in that event listener determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();

  // matching strategy
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});



// ///////////////////////////////////
// lectures
// selecting elements