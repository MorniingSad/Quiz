let currentSlide = 0;
const slides = document.querySelectorAll(".quiz-slide");

function showSlide(n) {
    const quiz = document.getElementById('quiz');
    quiz.style.transform = `translateX(-${n * 100}%)`; /* Move o container do quiz */
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
}

// Inicializa mostrando o primeiro slide
showSlide(currentSlide);

