document.addEventListener("DOMContentLoaded", function() {
	window.addEventListener("load", function() {
		initializePreloader();
	});
});

function initializePreloader() {
	setTimeout(function() {
		 const preloader = document.getElementById('preloader');
		 preloader.classList.add('hidden');
		 const mainContent = document.getElementById('main-content');
		 mainContent.style.display = 'block';

		 document.body.style.overflow = 'auto';
	}, 1500);
}


export default initializePreloader