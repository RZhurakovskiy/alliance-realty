import initializePreloader from "./modules/preloader.js";
import initializeScrollToTop from "./modules/scroll-to-top.js";
import handleScrollEvent from "./modules/feedback-form-button.js";
import colorScrollBtn from "./modules/color-button-scroll.js";
import mobileNav from "./modules/mobile-nav.js";
import initializeAccordion from "./modules/questions-accordeon.js";
import toggleModal from "./modules/feedback-modal.js";
import initModal from "./modules/feedback-modal.js";

import Swiper from "swiper/bundle";

import "swiper/css/bundle";

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-left",
    prevEl: ".swiper-button-right",
  },
});

const swiper1 = new Swiper(".swiper-container-apartments", {
  slidesPerView: 1,
  spaceBetween: 60,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-left-2",
    prevEl: ".swiper-button-right-2",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
