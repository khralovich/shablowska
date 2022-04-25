'use strict'

const galleryImgArr =  document.querySelectorAll('.content-section__gallery-item');
const closeBtn = document.querySelector('#close-btn');
const modalOverlayLayer = document.querySelector('#modal-overlay');
const leftBtn =  document.querySelector('#btn-left');
const rightBtn =  document.querySelector('#btn-right');
const paginationLeft = document.querySelector('#pagination__left');
const paginationRight = document.querySelector('#pagination__right');
const dots = document.getElementById("dots");
const moreText = document.getElementById("more");
const moreBtn = document.getElementById("moreBtn");

const pagesArr = [ 'https://shablowska.com/a', 'https://shablowska.com/b', 'https://shablowska.com/c', 'http://127.0.0.1:5500/pages/project01.html'];


/********************* NAVIGATION *********************/

function leftPressed() {
  galleryImgArr[counter].classList.remove("modal");
  if (counter == 0) {
    counter = galleryImgArr.length-1
      } else   counter--;
  galleryImgArr[counter].classList.add("modal");

}

function rightPressed() {
  galleryImgArr[counter].classList.remove("modal");
  if (counter == 9) {
counter = 0;
  } else counter++;
  galleryImgArr[counter].classList.add("modal");
}

function closePressed() {
  galleryImgArr[counter].classList.remove("modal");
  closeBtn.classList.add("invisible");
  modalOverlayLayer.classList.remove("modal-overlay")
  rightBtn.classList.add("invisible");
  leftBtn.classList.add("invisible");
  counter = 0;
  document.removeEventListener('keydown', arrowKeysHandler)
}


function arrowKeysHandler(e) {
  switch (e.keyCode) {
    case 37:
      leftPressed();
        break;
    case 39:
      rightPressed();
        break;
        case 27:
          closePressed();
          break;
}
}


let counter = 0;


galleryImgArr.forEach( e=> {
  e.addEventListener('click', ()=> {
    document.addEventListener('keydown', arrowKeysHandler);
    e.classList.add("modal");
    counter = Array.prototype.indexOf.call(galleryImgArr, e);
    closeBtn.classList.remove("invisible");
    modalOverlayLayer.classList.add("modal-overlay");
    rightBtn.classList.remove("invisible");
    leftBtn.classList.remove("invisible");
})})


closeBtn.addEventListener('click', closePressed)
rightBtn.addEventListener('click', rightPressed)
leftBtn.addEventListener('click', leftPressed)



/********************* READ MORE *********************/

function readMore() {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreBtn.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    moreBtn.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

moreBtn.addEventListener('click', readMore);




/******************** PAGINATION ********************/

let currentPageIndex = pagesArr.indexOf(window.location.href);
let previousPage = "location.href='" + pagesArr[currentPageIndex-1] + "'";
let nextPage = "location.href='" + pagesArr[currentPageIndex+1] + "'";


function pageChecker() {
  let theLastPage = pagesArr[pagesArr.length];
  let theFirstPage = pagesArr[0];

  if (currentPageIndex == 0) {
    previousPage = "location.href='" + theLastPage + "'";
  };

  if (currentPageIndex == theLastPage) {
    nextPage == "location.href='" + theFirstPage + "'";
  }
}

pageChecker();

paginationRight.setAttribute('onclick', nextPage );
paginationLeft.setAttribute('onclick', previousPage);


/******************** CAPTIONS ********************/