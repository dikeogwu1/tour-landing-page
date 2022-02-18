// ****** DOM MANIPULATION *****
const toggler = document.querySelector('.btn-menu')
const linksWrapper = document.querySelector('.ul-wrapper')

// ***** EVENT LISTENERS *****
// *menu*toggler*
toggler.addEventListener('click', () => {
  linksWrapper.classList.toggle('show-links')
})
