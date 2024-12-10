//слайдер
const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let slideIndex = 0;
const slideWidth = slides.children[0].clientWidth;
let autoSlideInterval;

function showSlide(index) {
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        slideIndex = (slideIndex + 1) % slides.children.length;
        showSlide(slideIndex);
    }, 3000); // Интервал в 3 секунды
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

prevButton.addEventListener('click', () => {
    stopAutoSlide();
    slideIndex = (slideIndex - 1 + slides.children.length) % slides.children.length;
    showSlide(slideIndex);
    startAutoSlide();
});

nextButton.addEventListener('click', () => {
    stopAutoSlide();
    slideIndex = (slideIndex + 1) % slides.children.length;
    showSlide(slideIndex);
    startAutoSlide();
});

// Инициализация слайдера
showSlide(slideIndex);
startAutoSlide();

// меню

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop();

    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

//бургер меню

function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
  }