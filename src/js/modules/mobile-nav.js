const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.nav-icon');
const navLinks = document.querySelectorAll('.nav__item-link')

navBtn.addEventListener('click', mobileNav);
document.addEventListener('click', closeNavOnOutsideClick);
function mobileNav() {
		nav.classList.toggle('nav--active');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');

}
navLinks.forEach(link => {
    link.addEventListener('click', closeNav);
  });
  
  function closeNav() {
    nav.classList.remove('nav--active');
    menuIcon.classList.remove('nav-icon--active');
    document.body.classList.remove('no-scroll');
  }
  
  // Закрываем меню при клике вне nav
  function closeNavOnOutsideClick(event) {
    if (!nav.contains(event.target) && !navBtn.contains(event.target)) {
      closeNav();
    }
  }
export default mobileNav;