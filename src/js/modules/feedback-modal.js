function toggleModal(modalOverlay) {
    const body = document.body;

    if (modalOverlay.classList.contains('show')) {
        modalOverlay.classList.remove('show');
        body.classList.remove('no-scroll-modal');
    } else {
        modalOverlay.classList.add('show');
        body.classList.add('no-scroll-modal');
    }
}

function initModal() {
    const openModalBtns = document.querySelectorAll('.modal-button');
    const closeModalBtns = document.querySelectorAll('.close-btn');
    const modalOverlays = document.querySelectorAll('.modal-overlay');

    openModalBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            toggleModal(modalOverlays[index]);
        });
    });

    closeModalBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            toggleModal(modalOverlays[index]);
        });
    });

    modalOverlays.forEach(modalOverlay => {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                toggleModal(modalOverlay);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initModal);

export default initModal;
