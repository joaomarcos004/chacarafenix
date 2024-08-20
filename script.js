let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    const offset = -currentIndex * 100; // Multiplica pelo valor percentual da largura de cada imagem
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}
