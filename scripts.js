let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}


// Mostrar el primer slide
showSlide(currentSlide);

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    document.querySelector(".carousel-control-next").addEventListener("click", () => {
        items[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add("active");
    });

    document.querySelector(".carousel-control-prev").addEventListener("click", () => {
        items[currentIndex].classList.remove("active");
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        items[currentIndex].classList.add("active");
    });
});


