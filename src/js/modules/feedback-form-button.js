let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

function handleScrollEvent() {
  const button = document.querySelector(".header__top-btn");
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > 500) {
    button.classList.add("visible");
  } else {
    button.classList.remove("visible");
  }

  if (scrollTop < lastScrollTop && scrollTop <= 80) {
    button.classList.remove("visible");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

window.addEventListener("scroll", handleScrollEvent, false);

export default handleScrollEvent;
