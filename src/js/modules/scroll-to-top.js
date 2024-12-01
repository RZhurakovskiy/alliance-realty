function initializeScrollToTop() {
	const scrollToTopBtn = document.getElementById("scrollToTop");
	const sections = document.querySelectorAll('.section');
 
	const changeButtonColor = () => {
	  sections.forEach(section => {
		 const rect = section.getBoundingClientRect();
		 if (rect.top <= window.innerHeight && rect.bottom >= 0) {
			if (getComputedStyle(section).backgroundColor === 'rgb(45, 45, 45)') {
			  scrollToTopBtn.style.color = "#fff";
			} else {
			  scrollToTopBtn.style.color = "#081b74";
			}
		 }
	  });
	};
 
	window.addEventListener("scroll", function () {
	  if (window.scrollY > 500) {
		 scrollToTopBtn.classList.add("show");
	  } else {
		 scrollToTopBtn.classList.remove("show");
	  }
	  changeButtonColor();
	});
 
	scrollToTopBtn.addEventListener("click", function () {
	  window.scrollTo({
		 top: 0,
		 behavior: 'smooth'
	  });
	});
 }
 
 document.addEventListener("DOMContentLoaded", function () {
	initializeScrollToTop();
 });
 
 export default initializeScrollToTop;