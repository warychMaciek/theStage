//automatic slider

onload = start;

function start() {
    var i = 1;
    function Move() {
        i = (i%3)+1
        document.getElementById('r'+i).checked = true;
    }
    setInterval(Move,5000);
};

// changing navbar background function & shrinking logo function
const navBar = document.getElementById('nav');
const logo = document.getElementById('fullscreen-logo');

window.onscroll = () => {
    if (this.scrollY <= 50) {
        navBar.className = 'navbar';
        logo.className = 'logo-non-scaled';
    }
    else {
        navBar.className = 'navbar-scrolled';
        logo.className = 'logo-scaled';
    }
};

//modal section

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const bodyScrollLock = document.querySelector('body');
const scrollBehavior = document.querySelector('html');

let scrollTop;

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        scrollTop = window.scrollY;
        openModal(modal);
        scrollBehavior.style.scrollBehavior = 'auto';
    })
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
        window.scrollTo(0, scrollTop);
        scrollBehavior.style.scrollBehavior = 'smooth';
    })
});

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
    bodyScrollLock.style.overflow = 'hidden';
};

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
    bodyScrollLock.style.overflow = 'visible';
};