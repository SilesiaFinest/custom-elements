const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Nav toggle
        nav.classList.toggle('nav-active');
        // Links animation
        // using forEach and index / 6 so can add more li object and will create delay automatically
        // + 0.4 for initial delay
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 0.4}s`;
            }
        });
        // Burger animation
        burger.classList.toggle('toggle');
    });

}
navSlide();