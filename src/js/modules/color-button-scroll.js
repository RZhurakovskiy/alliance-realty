function colorScrollBtn() {

	const scrollToTopBtn = document.getElementById("scrollToTop");
	const letters = scrollToTopBtn.querySelectorAll('span');
	const sections = document.querySelectorAll('.section');
 
	const changeButtonLetterColors = () => {
	  sections.forEach(section => {
		 const rect = section.getBoundingClientRect();
		 const sectionTop = rect.top;
		 const sectionBottom = rect.bottom;
		 
		 if (sectionTop <= window.innerHeight && sectionBottom >= 0) {
			letters.forEach(letter => {
			  const letterRect = letter.getBoundingClientRect();
			  if (letterRect.top >= sectionTop && letterRect.bottom <= sectionBottom) {
				 letter.style.transition = 'color 0.3s ease';
				 if (getComputedStyle(section).backgroundColor === 'rgb(45, 45, 45)') {
					letter.style.color = '#fff';
				 } else {
					letter.style.color = '#081b74';
				 }
			  }
			});
		 }
	  });
	};
 
	window.addEventListener("scroll", () => {
	  if (window.scrollY > 500) {
		 scrollToTopBtn.classList.add("show");
	  } else {
		 scrollToTopBtn.classList.remove("show");
	  }
	  changeButtonLetterColors();
	});
 
	scrollToTopBtn.addEventListener("click", () => {
	  window.scrollTo({
		 top: 0,
		 behavior: 'smooth'
	  });
	});
 }
 
 export default colorScrollBtn;
 