let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-img');
    const totalSlides = slides.length;
    
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    const offset = -currentSlide * 100;  // Move to the next slide in percentage
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}

