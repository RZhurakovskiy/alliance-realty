function initializeAccordion() {
    const headers = document.querySelectorAll('.accordion__header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const arrow = header.querySelector('.accordion__arrow');

            header.classList.toggle('active');
            arrow.classList.toggle('rotate');

            if (content.classList.contains('show')) {
                content.classList.remove('show');
                content.style.maxHeight = null;
            } else {
                content.classList.add('show');
    
                
       
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeAccordion);




export default initializeAccordion;