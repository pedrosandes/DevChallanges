const menu = document.querySelector('.menu')
const menuClose = document.querySelector('.menu-close')
const nav = document.querySelector('.nav')
const body = document.querySelector('body')

menu.addEventListener('click', () => {
  nav.classList.add('open')
  menuClose.style.display = 'block'
  body.style.overflow = 'hidden'
})

menuClose.addEventListener('click', () => {
  nav.classList.remove('open')
  menuClose.style.display = 'none'
  body.style.overflow = 'unset'
})

window.addEventListener('resize', () => {
  let width = window.innerWidth;
  if(width > 800) {
    nav.classList.remove('open')
    menuClose.style.display = 'none'
    body.style.overflow = 'unset'
  }
})