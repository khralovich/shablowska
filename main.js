'use strict'

const menuButton = document.querySelector('#hamburger');


/********  Hamburger *******/

function addHamburger() {
  const pageNavigation = document.querySelector('.page-navigation');
  pageNavigation.classList.toggle('page-navigation-visible');
  const menuAnimation = document.querySelector('.hamburger-menu');
  menuAnimation.classList.toggle('hamburger-menu__animation');
}


menuButton.addEventListener('click', addHamburger);
