let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-img');
    const totalSlides = slides.length;
    
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    const offset = -currentSlide * 100; 
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}

