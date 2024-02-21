hamburger = document.querySelector('.hamburger');
mobile = document.querySelector('.mobile');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile.classList.toggle('active');
})